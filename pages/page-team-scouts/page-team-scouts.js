import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/scouts',
	{
		// Route name
		name: 'pageTeamScouts',
		
		// Page Data
		data: function() {
			return {
				title: 'Scouts',
				actions: {
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHireScout', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
