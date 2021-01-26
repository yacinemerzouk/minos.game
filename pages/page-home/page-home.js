import { Router } from 'meteor/meteorhubdotnet:iron-router';

/**
 * Route for homepage
 *
 * Path: /
 *
 * @module Route: pageHome
 */
Router.route(
    '/',
    {
        // Route name
        name: 'pageHome',
		
		// Page Data
		data() {
        	return {
				title: 'My Teams',
				actions: {
					next: {
						text: 'New Team',
						link: Router.path('pageTeamNew')
					}
				}
			}
		}

    },

);
