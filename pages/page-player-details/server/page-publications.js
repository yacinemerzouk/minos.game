Meteor.publish('pagePlayerDetails', function({ playerId, teamId }) {

    const playersCursor = Players.find({ _id: playerId });
    const teamsCursor = Teams.find({ _id: teamId });
    return [
        playersCursor,
        teamsCursor,
    ];

});
