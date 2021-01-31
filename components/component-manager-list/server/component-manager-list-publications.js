Meteor.publish('componentManagerList', function() {

    return Managers.find({ teamId: { $exists: false } });

});
