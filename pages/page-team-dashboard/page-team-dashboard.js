import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/dashboard',
	{
		// Route name
		name: 'pageTeamDashboard',
		
		// Page subscriptions
		subscriptions: function () {
			
			return Meteor.subscribe('pageTeamDashboard', { teamId: this.params.teamId });
			
		},
		
		// Page Data
		data: function() {

			const title = 'Team Dashboard';
			const team = new Team({ teamId: this.params.teamId });
			const actions = {
				previous: {
					link: Router.path('pageHome')
				}
			}
			return { title, team, actions };
			
		}

	},

);
