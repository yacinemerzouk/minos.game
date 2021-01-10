import { Router } from 'meteor/meteorhubdotnet:iron-router';

/**
 * Route for new team form
 *
 * Path: /team/new
 *
 * @module Route: pageHome
 */
Router.route(
	'/team/new',
	{
		// Route name
		name: 'pageTeamNew',
		
		// Page Data
		data: {
			title: 'New Team',
		}

	},

);
