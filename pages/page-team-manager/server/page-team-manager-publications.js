Meteor.publish('pageTeamManager', function({ teamId }) {

    return Managers.find({ teamId });

});