Meteor.publish('pageTeamDashboard', function({ teamId }) { 

	if (teamId) {
		
		const teams = Teams.find({ _id: teamId }, { fields: { teamName: 1 } });
		console.log(`Found ${teams.count()} teams.`);
		return teams;
		
	}	
	
	return [];
	
});
