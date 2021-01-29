MinosMatch = class {

    constructor({ matchId } = {}) {

        let matchData = {};

        // check for email or user ID or userSlug
        if (matchId) {

            matchData = MinosMatches.findOne({ _id: matchId });

        }


        // Set members of object
        if (matchData) {

            const matchDataProperties = Object.keys(matchData);
            for (let i = 0; i < matchDataProperties.length; i += 1) {

                const prop = matchDataProperties[i];
                this[prop] = matchData[prop];

            }

        }

    }

    /**
     * Assigns matchData values to members
     * @param matchData
     */
    populate({ matchData }) {

        if (matchData) {

            Object.assign(this, matchData);

        }

    }

    save() {

        if (this._id) {

            return this.update();

        } else {

            return this.create();

        }

    }

    create() {

        this._id = MinosMatches.insert(this);
        return !!this._id;

    }

    update() {

        return MinosMatches.update({ _id: this._id }, { $set: this });

    }

    remove() {

        return MinosMatches.remove({ _id: this._id });

    }

    play() {

        console.log('Playing match...');
        const matchEngine = new MinosMatchEngine();
        matchEngine.simulate({ matchId: this._id });

    }

};
