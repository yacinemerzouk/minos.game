Meteor.publish('componentTeamRecord', function({ teamId }) {

    // Get team data
    // -- Wins / Losses / Draws
    // -- teamId so we can run queries on the client
    return Teams.find({ _id: teamId }, { fields: { teamId: 1, wins: 1, losses: 1, draws: 1 } });

});
