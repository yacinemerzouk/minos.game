import { Router } from 'meteor/meteorhubdotnet:iron-router';

Router.route(
	'/:teamId/manager/:managerId',
	{
		// Route name
		name: 'pageManagerDetails',

		subscriptions: function () {
			return Meteor.subscribe('pageManagerDetails', { playerId: this.params.playerId, teamId: this.params.teamId });
		},

		// Page Data
		data: function() {

			const params = this.params;
			const manager = new Manager({ managerId: this.params.managerId });
			// const team = new Team({ teamId: this.params.teamId });
			return {
				params,
				title: `${manager.firstName} ${manager.lastName}`
			};

		}

	},

);
