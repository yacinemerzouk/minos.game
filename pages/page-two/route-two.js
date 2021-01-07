import { Router } from 'meteor/meteorhubdotnet:iron-router';

/**
 * Route for page 2
 *
 * Path: /
 *
 * @module Route: pageTwo
 */
Router.route(
    '/2',
    {
        // Route name
        name: 'pageTwo',

		// Page Data
		data: {
			title: 'Page Two',
		}
    },

);
