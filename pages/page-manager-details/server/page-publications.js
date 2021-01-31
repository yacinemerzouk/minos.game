Meteor.publish('pageManagerDetails', function({ teamId, managerId }) {

    // Just data for title bar
    const managersCursor = Managers.find({ _id: managerId }, { fields: { firstName: 1, lastName: 1 } });
    // const teamsCursor = Teams.find({ _id: teamId });
    return managersCursor;

});
