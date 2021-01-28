Meteor.publish('pageTeamDashboard', function({ teamId }) { 

	if (teamId) {

		// All team info
		const teamsCursor = Teams.find({ _id: teamId });

		// Cursor just to know number of players on team
		const playersCursors = Players.find({ teamId }, { fields: { _id: 1, teamId: 1 } });

		// Return that shit
		return [
			teamsCursor,
			playersCursors
		];
		
	}	

	// Return empty if we don't have team id
	return [];
	
});
