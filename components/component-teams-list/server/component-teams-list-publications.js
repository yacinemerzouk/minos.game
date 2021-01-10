// import { Teams } from '/api/teams/teams-collection.js';

Meteor.publish('componentTeamsList', function() {
	
	const teams = Teams.find({ userId: this.userId });
	return teams;
	
});
