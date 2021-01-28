SyncedCron.add({
    name: 'Process Arena Queue',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('every 10 seconds');
    },
    job: function() {

        // Get all teams owned by players in arena queue
        const teamsInQueue = Teams.find({ playerId: { $exists: true } }).fetch();

        // If number of teams in queue is not even, add a cpu team to the array
        if ( teamsInQueue.length % 2 === 1) {

            const extraTeam = Teams.findOne({ playerId: { $exists: false } });
            teamsInQueue.push(extraTeam);

        }

        // Create match
        // Add one team to the match
        //     and remove it from the array
        //     and unset inArenaQueue
        // Add the second team and remove it from the array
        //     and remove it from the array
        //     and unset inArenaQueue



    }
});

SyncedCron.start();