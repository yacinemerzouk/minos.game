Meteor.publish('componentPlayButton', function({ teamId }) {

    if (teamId) {

        // We just need a cursor to count the number of players and managers
        // We need the minimum amount of fields
        // -- Just teamId so we can run queries on the client side
        // We also need to keep track of the arena queue and match result
        return [
            Managers.find({ teamId }, { fields: { teamId: 1 } }),
            Players.find({ teamId }, { fields: { teamId: 1 } }),
        ];

    } else {

        return [];

    }

});
