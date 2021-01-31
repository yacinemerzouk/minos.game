import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/dashboard',
	{
		// Route name
		name: 'pageTeamDashboard',

		// Page Data
		data: function() {

			const title = 'Team Dashboard';

			const params = this.params;

			const actions = {
				previous: {
					link: Router.path('pageHome')
				}
			}
			return { params, title, actions };
			
		}

	},

);
