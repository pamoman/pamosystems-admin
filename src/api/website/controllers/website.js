'use strict';

/**
 * website controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website.website', ({ strapi }) => ({
    async findSlug(ctx) {
        try {
            const { body = {} } = ctx.request || {};

            let res;

            res = await strapi.documents('api::page.page').findFirst(body.pageQuery);

            if (!res) {
                res = await strapi.documents('api::category.category').findFirst(body.categoryQuery);
            }

            if (!res) {
                res = await strapi.documents('api::product.product').findFirst(body.productQuery);
            }

            return {
                data: res || {},
                meta: {}
            }
        } catch (err) {
            ctx.body = err;
        }
    }
}));
