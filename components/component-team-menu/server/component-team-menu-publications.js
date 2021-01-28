Meteor.publish('componentTeamMenu', function({ teamId }) {

    // Get minimal player data to count records
    // -- teamId so we can run queries on the client
    return Players.find({ teamId }, { fields: { teamId: 1 } });

});
