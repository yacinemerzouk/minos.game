Meteor.publish('componentTeamFooter', function({ teamId }) {

    if( teamId ) {

        // Get team data:
        // -- team name
        // -- intel
        // -- gold
        return Teams.find({ _id: teamId }, { fields: { _id: 1, teamName: 1, intel: 1, gold: 1 } });

    }

    return [];

});
