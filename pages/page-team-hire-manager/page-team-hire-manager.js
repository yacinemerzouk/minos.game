import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/manager',
	{
		// Route name
		name: 'pageTeamHireManager',

		// Page Data
		data: function() {

			const params = this.params;

			return {

				params,

				title: 'Hire New Manager',

				actions: {
					previous: {
						link: Router.path('pageTeamManager', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
