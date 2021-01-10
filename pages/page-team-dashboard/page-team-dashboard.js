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
			
			const team = new Team({ teamId: this.params.teamId });
			return { title: team.teamName, teamId: team._id };
			
		}

	},

);
