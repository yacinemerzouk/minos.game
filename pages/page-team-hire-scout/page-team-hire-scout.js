import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/scout',
	{
		// Route name
		name: 'pageTeamHireScout',
		
		// Page Data
		data: {
			title: 'Hire Scout',
		}

	},

);
