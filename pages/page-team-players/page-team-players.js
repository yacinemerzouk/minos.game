import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/players',
	{
		// Route name
		name: 'pageTeamPlayers',

		subscriptions() {
			return Meteor.subscribe('pageTeamPlayers', { teamId: this.params.teamId });
		},
		
		// Page Data
		data: function() {
			const team = new Team({ teamId: this.params.teamId });
			// console.log(`This team has ${team.players().length} players`);
			return {
				title: 'My Players',
				players: team.players(),
				team,
				actions: {
					previous: {
						link: Router.path('pageTeamDashboard', { teamId: this.params.teamId })
					},
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHirePlayer', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
