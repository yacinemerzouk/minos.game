Meteor.publish('TEMPLATE_NAME_GOES_HERE', function({ teamId }) {

    return Managers.find({ teamId });

});