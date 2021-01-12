Meteor.publish('componentPlayerList', function() {

    return Players.find({ teamId: { $exists: false } });

});
