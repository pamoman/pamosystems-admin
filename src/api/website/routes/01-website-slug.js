'use strict';

/**
 * website slug router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/website/slug',
            handler: 'website.findSlug'
        }
    ]
};