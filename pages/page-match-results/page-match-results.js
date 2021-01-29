import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/match/:matchId',
	{
		// Route name
		name: 'pageMatchResults',

		// Page subscriptions
		waitOn: function () {

			return Meteor.subscribe('pageMatchResults', { teamId: this.params.teamId, matchId: this.params.matchId });

		},

		// Page Data
		data: function() {

			const title = 'Match Results';
			const params = this.params;
			const match = new MinosMatch({ matchId: this.params.matchId });
			const whiteTeam = new Team({ teamId: match.whiteTeamId });
			const blackTeam = new Team({ teamId: match.blackTeamId });

			const loggedInTeam = new Team({ teamId: this.params.teamId });
			if (loggedInTeam._id) {

				loggedInTeam.currentMatch = '';
				// console.log(this.params.teamId, loggedInTeam);
				loggedInTeam.save();

			}

			const actions = {
				previous: {
					link: Router.path('pageTeamDashboard', { teamId: this.params.teamId })
				}
			}

			return { params, title, actions, match, whiteTeam, blackTeam };

		}

	},

);
