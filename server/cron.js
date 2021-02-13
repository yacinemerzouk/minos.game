SyncedCron.add({
    name: 'Process Arena Queue',
    schedule: function(parser) {
        // parser is a later.parse object
        return parser.text('every 10 seconds');
    },
    job: function() {

        console.log('In arena queue...');

        // Get all teams owned by players in arena queue
        const teamsInQueue = Teams.find({ inArenaQueue: true, userId: { $exists: true } }).fetch();

        // If number of teams in queue is not even, add a cpu team to the array
        if ( teamsInQueue.length % 2 === 1) {

            const totalPossibleTeams = Teams.find({ userId: { $exists: false } }).count();
            const n = Math.floor( Math.random() * totalPossibleTeams );
            const extraTeam = Teams.findOne({ userId: { $exists: false } }, { skip: n });
            teamsInQueue.push(extraTeam);

        }

        console.log(`Got ${teamsInQueue.length} teams in the queue...`);

        for (let x = 0; x < teamsInQueue.length; x = x + 2) {

            console.log('Creating matches...');

            // Create match for 2 team
            const whiteTeam = new Team({ teamId: teamsInQueue[x]._id });
            console.log(`White team: ${whiteTeam._id}`);
            const blackTeam = new Team({ teamId: teamsInQueue[x+1]._id });
            console.log(`Black team: ${blackTeam._id}`);
            const minosMatch = new MinosMatch();
            minosMatch.whiteTeamId = whiteTeam._id;
            minosMatch.blackTeamId = blackTeam._id;
            minosMatch.save();

            // Remove teams from queue
            whiteTeam.inArenaQueue = false;
            whiteTeam.currentMatch = minosMatch._id;
            whiteTeam.save();
            blackTeam.inArenaQueue = false;
            blackTeam.currentMatch = minosMatch._id;
            blackTeam.save();

            // Play!
            minosMatch.play();

        }



    }
});

SyncedCron.start();