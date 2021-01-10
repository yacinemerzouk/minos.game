import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/player',
	{
		// Route name
		name: 'pageTeamHirePlayer',
		
		// Page Data
		data: {
			title: 'Hire Player',
		}

	},

);
