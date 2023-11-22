'use strict';

/**
 * list-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-user.list-user');
