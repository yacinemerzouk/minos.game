Meteor.publish('pageTeamHirePlayer', function({ teamId }) {

    if (teamId) {

        const teams = Teams.find({ _id: teamId });
        return teams;

    }

    return [];

});
