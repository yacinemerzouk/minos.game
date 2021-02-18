Meteor.publish('pageTeamDashboard', function({ teamId }) {

    return Teams.find({ _id: teamId });

});
