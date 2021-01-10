Meteor.publish('componentTeamForm', function({ teamId }) { 

	if (teamId) {
		
		return Teams.find({ _id: teamId });
		
	}	
	
	return [];
	
});
