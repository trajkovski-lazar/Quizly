'use strict';
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  
    getCategoriesForUser: async (ctx) => {
      const loggedInUser = ctx.state.user;
      const categories = await strapi.services.category.find({ owner: loggedInUser.id });

      return categories.map(category => sanitizeEntity(category, { model: strapi.models.category }));
    },

    create: async (ctx) => {
      let entity;
      let categoryName = ctx.request.body.name;
      let loggedInUser = ctx.state.user;
      if (categoryName !== undefined && categoryName !== "") {
        let category = {
          name: categoryName,
          owner: loggedInUser
        };
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.category.create(data, { files });
        } else {
          entity = await strapi.services.category.create(category);
        }
        return sanitizeEntity(entity, { model: strapi.models.category });
      } else {
        throw new Error("You need to enter your category name!");
      }
    },

    findOne: async (ctx) => {
      const { id } = ctx.params;
      const loggedInUser = ctx.state.user;

      const category = await strapi.services.category.findOne({ id });

      const owner = category.owner;

      if (loggedInUser.id === owner.id) {
        return sanitizeEntity(category, { model: strapi.models.category });
      }
      else {
        throw new Error("Access denied!");
      }
    },

    update: async (ctx) => {
      const loggedInUser = ctx.state.user;
      const { id } = ctx.params;
      const category = await strapi.services.category.findOne({ id });
      const owner = category.owner;

      if (loggedInUser.id === owner.id) {

        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.category.update({ id }, data, {
            files,
          });
        } else {
          entity = await strapi.services.category.update({ id }, ctx.request.body);
        }

        return sanitizeEntity(entity, { model: strapi.models.category });
      }
      else {
        throw new Error("Access denied!");
      }
    },

    delete: async (ctx) => {
      const loggedInUser = ctx.state.user;
      const { id } = ctx.params;
      const category = await strapi.services.category.findOne({ id });
      const owner = category.owner;

      if (loggedInUser.id === owner.id) {

        const entity = await strapi.services.category.delete({ id });
        return sanitizeEntity(entity, { model: strapi.models.category });
      }
      else {
        throw new Error("Access denied!");
      }
    }
};
