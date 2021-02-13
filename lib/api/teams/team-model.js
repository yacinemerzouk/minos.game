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

        const playersArray = Players.find({ teamId: this._id }).fetch();
        const players = [];
        playersArray.forEach((player) => {
            players.push(new Player({ playerData: player }));
        });
        return players;

    }

    nbPlayers() {

        return Players.find({ teamId: this._id }).count();

    }

    nbManagers() {

        return Managers.find({ teamId: this._id }).count();

    }

    manager() {

        const manager = Managers.findOne({ teamId: this._id });
        return new Manager({ managerId: manager._id });

    }

    randomPlayer() {

        const players = this.players();
        return players[Math.floor(Math.random()*players.length)];

    }

    gameExpenses() {

        const players = this.players();
        const manager = this.manager();
        let expenses = 0;
        players.forEach((player) => {
            expenses += player.salary || 1;
        });
        expenses += manager.salary || 1;
        return expenses;

    }

    updateStat({ stat }) {

        if (stat === 'matches') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.matches = this.stats.career.matches || 0;
            this.stats.career.matches++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.matches = this.stats.season1.matches || 0;
            this.stats.season1.matches++;

        }

        if (stat === 'wins') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.wins = this.stats.career.wins || 0;
            this.stats.career.wins++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.wins = this.stats.season1.wins || 0;
            this.stats.season1.wins++;

        }

        if (stat === 'losses') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.losses = this.stats.career.losses || 0;
            this.stats.career.losses++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.losses = this.stats.season1.losses || 0;
            this.stats.season1.losses++;

        }

        if (stat === 'draws') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.draws = this.stats.career.draws || 0;
            this.stats.career.draws++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.draws = this.stats.season1.draws || 0;
            this.stats.season1.draws++;

        }

        if (stat === 'scoresFor') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.scoresFor = this.stats.career.scoresFor || 0;
            this.stats.career.scoresFor++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.scoresFor = this.stats.season1.scoresFor || 0;
            this.stats.season1.scoresFor++;

        }

        if (stat === 'scoresAgainst') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.scoresAgainst = this.stats.career.scoresAgainst || 0;
            this.stats.career.scoresAgainst++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.scoresAgainst = this.stats.season1.scoresAgainst || 0;
            this.stats.season1.scoresAgainst++;

        }

        if (stat === 'goresFor') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.goresFor = this.stats.career.goresFor || 0;
            this.stats.career.goresFor++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.goresFor = this.stats.season1.goresFor || 0;
            this.stats.season1.goresFor++;

        }

        if (stat === 'goresAgainst') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.goresAgainst = this.stats.career.goresAgainst || 0;
            this.stats.career.goresAgainst++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.goresAgainst = this.stats.season1.goresAgainst || 0;
            this.stats.season1.goresAgainst++;

        }

    }

};
