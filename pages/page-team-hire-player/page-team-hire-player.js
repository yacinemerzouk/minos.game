import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/hire/player',
	{
		// Route name
		name: 'pageTeamHirePlayer',

		// Page subscriptions
		subscriptions: function () {

			return Meteor.subscribe('pageTeamHirePlayer', { teamId: this.params.teamId });

		},

		// Page Data
		data: function() {
			const title = 'Free Agent Players';
			const team = new Team({ teamId: this.params.teamId });
			const actions = {
				previous: {
					link: Router.path('pageTeamPlayers', { teamId: this.params.teamId })
				}
			}
			return { title, team, actions };
		}

	},

);
