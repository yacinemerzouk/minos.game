Meteor.publish('componentManagerCard', function({ managerId }) {

    return Managers.find({ _id: managerId });

});
