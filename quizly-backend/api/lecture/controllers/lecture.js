'use strict';
const { sanitizeEntity } = require("strapi-utils");
const category = require("../../category/controllers/category");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async (ctx) => {
        let entity;
        let loggedInUser = ctx.state.user;
        let lectureName = ctx.request.body.name;
        let selectedCategory = ctx.request.body.category;
        let category = await strapi.services.category.findOne({ id: selectedCategory.id });
        const owner = category.owner;

        if (!category) {
            throw new Error("You're trying to create a lecture in a non-existing category!");
        }
        if (!lectureName || lectureName === "")
            throw new Error("You need to enter your lecture name!");

        if (owner.id === loggedInUser.id) {
            let lecture = {
                name: lectureName,
                category: selectedCategory
            };
            if (ctx.is('multipart')) {
                const { data, files } = parseMultipartData(ctx);
                entity = await strapi.services.lecture.create(data, { files });
            } else {
                entity = await strapi.services.lecture.create(lecture);
            }
            return sanitizeEntity(entity, { model: strapi.models.lecture });
        } else {
            throw new Error("Access denied!");
        }
    },

    findOne: async (ctx) => {
        const { id } = ctx.params;
        const loggedInUser = ctx.state.user;

        const lecture = await strapi.services.lecture.findOne({ id });

        const owner = lecture.category.owner;

        if (loggedInUser.id === owner) {
            return sanitizeEntity(lecture, { model: strapi.models.lecture });
        }
        else {
            throw new Error("Access denied!");
        }
    },

    update: async (ctx) => {
        const loggedInUser = ctx.state.user;
        const lectureId = ctx.params.id;
        const lecture = await strapi.services.lecture.findOne({ id: lectureId });
        const ownerId = lecture.category.owner;

        if (loggedInUser.id === ownerId) {
            let entity;
            if (ctx.is('multipart')) {
                const { data, files } = parseMultipartData(ctx);
                entity = await strapi.services.lecture.update({ id: lectureId }, data, {
                    files,
                });
            } else {
                entity = await strapi.services.lecture.update({ id: lectureId }, ctx.request.body);
            }
            return sanitizeEntity(entity, { model: strapi.models.lecture });
        }
        else {
            throw new Error("Access denied!");
        }
    },

    delete: async (ctx) => {
        const loggedInUser = ctx.state.user;
        const { id } = ctx.params;
        const lecture = await strapi.services.lecture.findOne({ id });
        const owner = lecture.category.owner;
    
        if (loggedInUser.id === owner) {
          const entity = await strapi.services.lecture.delete({ id });
          return sanitizeEntity(entity, { model: strapi.models.lecture });
        }
        else {
          throw new Error("Access denied!");
        }
      }
};
