Meteor.publish('componentTeamMenu', function({ teamId }) {

    // Get minimal player data to count records (we'll need to display # of players & managers)
    // -- teamId so we can run queries on the client
    return [
        Players.find({ teamId }, { fields: { teamId: 1 } }),
        Managers.find({ teamId }, { fields: { teamId: 1 } })
    ]

});
