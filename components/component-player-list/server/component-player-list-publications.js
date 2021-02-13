Meteor.publish('componentPlayerList', function({ page }) {

    console.log('Firing componentPlayerList pub...');
    const playersCursor = Players.find( { $or: [{ teamId: { $exists: false } }, { teamId: '' }] }, { skip: (page - 1) * 10, limit: 10 });
    console.log(`Player list.... Found ${playersCursor.fetch().length} players on page ${page}`);
    return playersCursor;
});
