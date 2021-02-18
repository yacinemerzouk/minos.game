Meteor.publish('componentTeamRecord', function({ teamId }) {

    if (teamId) {

        // Get team data
        // -- Wins / Losses / Draws
        // -- teamId so we can run queries on the client
        const teamsCursor = Teams.find({ _id: teamId });
        console.log(`Found ${teamsCursor.count()} teams in team record...`);
        return teamsCursor;


    } else {

        return [];

    }

});
