'use strict';
const { sanitizeEntity } = require("strapi-utils");
const category = require("../../category/controllers/category");
const lecture = require("../../lecture/controllers/lecture");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async (ctx) => {
        let entity;
        let requestBodyLecture = ctx.request.body.lecture;

        if (requestBodyLecture) {
            let lecture = await strapi.services.lecture.findOne({ _id: requestBodyLecture.id });
            if (lecture === undefined || lecture === null)
                throw new Error("Lecture doesn't exist.");
        }
        else {
            throw new Error("Lecture not defined!");
        }
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.card.create(data, { files });
        } else {
            entity = await strapi.services.card.create(ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.card });
    },

    update: async (ctx) => {
        const loggedInUser = ctx.state.user;
        const id = ctx.params.id;
        const card = await strapi.services.card.findOne({ id });
        const categoryId = card.lecture.category;
        const category = await strapi.services.category.findOne({ id: categoryId });
        const ownerId = category.owner.id;

    
        if (loggedInUser.id === ownerId) {
            let entity;
            if (ctx.is('multipart')) {
                const { data, files } = parseMultipartData(ctx);
                entity = await strapi.services.card.update({ id }, data, {
                    files,
                });
            } else {
                entity = await strapi.services.card.update({ id }, ctx.request.body);
            }
            return sanitizeEntity(entity, { model: strapi.models.card });
        }
        else {
            throw new Error("Access denied!");
        }
    },

    delete: async (ctx) => {
        const loggedInUser = ctx.state.user;
        const id = ctx.params.id;
        const card = await strapi.services.card.findOne({ id });
        const categoryId = card.lecture.category;
        const category = await strapi.services.category.findOne({ id: categoryId });
        const ownerId = category.owner.id;

        if (loggedInUser.id === ownerId) {
            const entity = await strapi.services.card.delete({ id });
            return sanitizeEntity(entity, { model: strapi.models.card });
        }
        else {
            throw new Error("Access denied!");
        }
    }
};
