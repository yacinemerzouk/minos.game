Meteor.publish('componentPlayButton', function({ teamId }) {

    // We just need a cursor to count the number of players
    // We need the minimum amount of fields
    // -- Just teamId so we can run queries on the client side
    return [
        Players.find({ teamId }, { fields: { teamId: 1 } }),
        Teams.find({ _id: teamId }, { fields: { inArenaQueue: 1, currentMatch: 1 } })
    ];

});
