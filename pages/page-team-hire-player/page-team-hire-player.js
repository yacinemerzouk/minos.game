import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/player',
	{
		// Route name
		name: 'pageTeamHirePlayer',
		
		// Page Data
		data: function() {
			return {
				title: 'Hire Player',
				teamId: this.params.teamId
			}
		}

	},

);