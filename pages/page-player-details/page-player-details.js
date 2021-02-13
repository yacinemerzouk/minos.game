import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/:teamId/player/:playerId',
	{
		// Route name
		name: 'pagePlayerDetails',

		subscriptions: function () {
			return Meteor.subscribe('pagePlayerDetails', { playerId: this.params.playerId, teamId: this.params.teamId });
		},

		// Page Data
		data: function() {

			const player = new Player({ playerId: this.params.playerId });
			const team = new Team({ teamId: this.params.teamId });
			return {
				title: `${player.firstName} ${player.lastName}`,
				player,
				team,
				params: this.params
			};

		}

	},

);
