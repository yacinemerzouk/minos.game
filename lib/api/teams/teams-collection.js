import SimpleSchema from 'simpl-schema';

class TeamsCollection extends Mongo.Collection {

    insert(team, callback) {

        // team.wins = 0;
        // team.losses = 0;
        // team.draws = 0;
        team.intel = 0;
        team.gold = 500;

        return super.insert(team, callback);

    }

    update(selector, team, callback) {

        return super.update(selector, team, callback);

    }

    remove(selector, callback) {

        return super.remove(selector, callback);

    }

}

Teams = new TeamsCollection('minos_teams');

Teams.allow({

    insert() {

        return true;

    },
    update() {

        return true

    },
    remove() {

        return true;

    },

});

const teamsSchema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    teamName: { type: String, optional: false },
    teamColor: { type: String, optional: false },
    // wins: { type: Number, optional: false },
    // losses: { type: Number, optional: false },
	// draws: { type: Number, optional: false },
    intel: { type: Number, optional: false },
    gold: { type: Number, optional: false },
    inArenaQueue: { type: Boolean, optional: true },
    // hasNewResults: { type: Boolean, optional: true },
    currentMatch: { type: String, optional: true },
    stats: { type: Object, optional: true, blackbox: true },
});

Teams.attachSchema(teamsSchema);