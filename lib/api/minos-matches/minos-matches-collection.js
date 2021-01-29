import SimpleSchema from 'simpl-schema';

class MinosMatchesCollection extends Mongo.Collection {

    insert(match, callback) {

        match.wins = 0;
        match.losses = 0;

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
    winner: { type: String, optional: true }
});

MinosMatches.attachSchema(matchesSchema);