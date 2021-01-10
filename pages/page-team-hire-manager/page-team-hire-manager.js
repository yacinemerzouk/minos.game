import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/manager',
	{
		// Route name
		name: 'pageTeamHireManager',
		
		// Page Data
		data: {
			title: 'Hire New Manager',
		}

	},

);
