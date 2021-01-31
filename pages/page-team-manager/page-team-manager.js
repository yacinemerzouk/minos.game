import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/manager/:managerId?',
	{
		// Route name
		name: 'pageTeamManager',

		subscriptions() {

			return Meteor.subscribe('pageTeamManager', { teamId: this.params.teamId });

		},

		// Page Data
		data: function() {

			const params = this.params;

			const manager = Managers.findOne({ teamId: this.params.teamId });

			return {

				params,

				title: 'My Manager',

				manager,

				actions: {
					previous: {
						link: Router.path('pageTeamDashboard', { teamId: this.params.teamId })
					},
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHireManager', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
