Meteor.publish('componentManagerList', function({ page }) {

    console.log('Firing componentManagerList pub...');
    const managersCursor = Managers.find( { $or: [{ teamId: { $exists: false } }, { teamId: '' }] }, { skip: (page - 1) * 10, limit: 10 });
    console.log(`Manager list.... Found ${managersCursor.fetch().length} managers on page ${page}`);
    return managersCursor;

});
