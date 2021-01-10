import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/manager',
	{
		// Route name
		name: 'pageTeamManager',
		
		// Page Data
		data: function() {
			return {
				title: 'Manager',
				actions: {
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHireManager', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
