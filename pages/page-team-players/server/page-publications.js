Meteor.publish('pageTeamPlayers', function({ teamId }) {

    return [
        Teams.find({ _id: teamId }),
        Players.find({ teamId }),
    ]

});
