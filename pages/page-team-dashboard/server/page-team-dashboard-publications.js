Meteor.publish('pageTeamDashboard', function({ teamId }) { 

	if (teamId) {
		
		const teams = Teams.find({ _id: teamId });
		return teams;
		
	}	
	
	return [];
	
});
