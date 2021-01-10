import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/coach',
	{
		// Route name
		name: 'pageTeamHireCoach',
		
		// Page Data
		data: {
			title: 'Hire New Coach',
		}

	},

);
