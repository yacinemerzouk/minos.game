Router.route(
	'/team/:teamId/dashboard',
	{
		// Route name
		name: 'pageTeamDashboard',

		waitOn() {

			Meteor.subscribe('pageTeamDashboard', { teamId: this.params.teamId });

		},

		// Page Data
		data: function() {

			// Page title to display in top navbar
			const title = 'Team Dashboard';

			// Page params
			const params = this.params;

			// Team object - the team being played right now
			const team = new Team({ teamId: this.params.teamId });

			// Action buttons to display in the top navbar
			const actions = {
				previous: {
					link: Router.path('pageHome')
				},
				next: false
			}
			return { params, title, actions, team };
			
		}

	},

);
