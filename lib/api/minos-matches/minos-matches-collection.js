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

export const MinosMatches = new MinosMatchesCollection('minos_matches');

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
    challengerId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    opponentId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: false },
    challengerStrategy: { type: String, optional: false },
});

MinosMatches.attachSchema(matchesSchema);