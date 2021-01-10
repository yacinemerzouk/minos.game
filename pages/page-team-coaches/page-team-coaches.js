import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/coaches',
	{
		// Route name
		name: 'pageTeamCoaches',
		
		// Page Data
		data: function() {
			return {
				title: 'Coaches',
				actions: {
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHireCoach', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
