Meteor.publish('componentManagerActions', function({ teamId }) {

    // Need manager of team, if any
    // -- just need the teamId field to run query on
    return Managers.find({ teamId }, { fields: { teamId: 1 } });

});
