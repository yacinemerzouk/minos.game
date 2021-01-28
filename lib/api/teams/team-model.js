// import { Teams } from '/api/teams/teams-collection.js';

Team = class {

    constructor({ teamId } = {}) {

        let teamData = {};

        // check for email or user ID or userSlug
        if (teamId) {

            teamData = Teams.findOne({ _id: teamId });

        }


        // Set members of object
        if (teamData) {

            const teamDataProperties = Object.keys(teamData);
            for (let i = 0; i < teamDataProperties.length; i += 1) {

                const prop = teamDataProperties[i];
                this[prop] = teamData[prop];

            }

        }

    }

    /**
     * Assigns teamData values to members
     * @param teamData
     */
    populate({ teamData }) {

        if (teamData) {

            Object.assign(this, teamData);

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
		console.log(this);
		console.log(Teams);
        this._id = Teams.insert(this);
        return !!this._id;

    }

    update() {

        return Teams.update({ _id: this._id }, { $set: this });

    }

    remove() {

        return Teams.remove({ _id: this._id });

    }

    players() {

        return Players.find({ teamId: this._id }).fetch();

    }

    nbPlayers() {

        return Players.find({ teamId: this._id }).count();

    }

};
