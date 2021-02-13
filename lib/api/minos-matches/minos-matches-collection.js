import SimpleSchema from 'simpl-schema';

class MinosMatchesCollection extends Mongo.Collection {

    insert(match, callback) {

        match.whiteTeamScore = match.whiteTeamScore || 0;
        match.blackTeamScore = match.blackTeamScore || 0;

        return super.insert(match, callback);

    }

    update(selector, match, callback) {

        return super.update(selector, match, callback);

    }

    remove(selector, callback) {

        return super.remove(selector, callback);

    }

}

MinosMatches = new MinosMatchesCollection('minos_matches');

MinosMatches.allow({

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

const matchesSchema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id },
    whiteTeamId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    whiteTeamScore: { type: Number, optional: true},
    blackTeamScore: { type: Number, optional: true},
    blackTeamId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    winner: { type: String, optional: true },
    events: { type: Array, optional: true },
    'events.$': { type: Object, blackbox: true, optional: true },
    managerLevelUps: { type: Array, optional: true },
    'managerLevelUps.$': { type: Object, optional: true, blackbox: true },
    playerLevelUps: { type: Array, optional: true },
    'playerLevelUps.$': { type: Object, optional: true, blackbox: true },
    winnings: { type: Array, optional: true },
    'winnings.$': { type: Object, optional: true, blackbox: true },
});

MinosMatches.attachSchema(matchesSchema);