import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/team/:teamId/players',
	{
		// Route name
		name: 'pageTeamPlayers',
		
		// Page Data
		data: function() {
			return {
				title: 'Players',
				actions: {
					next: {
						text: 'Hire',
						link: Router.path('pageTeamHirePlayer', { teamId: this.params.teamId })
					}
				}
			}
		}

	},

);
