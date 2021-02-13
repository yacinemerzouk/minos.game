// import { Managers } from '/api/managers/managers-collection.js';

Manager = class {

    constructor({ managerId, teamId } = {}) {

        let managerData = {};

        // Grab manager data either from managerId or teamID
        if (managerId) {

            managerData = Managers.findOne({ _id: managerId });

        } else if (teamId) {

            managerData = Managers.findOne({ teamId });

        }


        // Set members of object
        if (managerData) {

            const managerDataProperties = Object.keys(managerData);
            for (let i = 0; i < managerDataProperties.length; i += 1) {

                const prop = managerDataProperties[i];
                this[prop] = managerData[prop];

            }

        }

    }

    /**
     * Assigns managerData values to members
     * @param managerData
     */
    populate({ managerData }) {

        if (managerData) {

            Object.assign(this, managerData);

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

        this._id = Managers.insert(this);
        return !!this._id;

    }

    update() {

        return Managers.update({ _id: this._id }, { $set: this });

    }

    remove() {

        return Managers.remove({ _id: this._id });

    }

    teams() {

        return Teams.find({ userId: this.userId }).fetch();

    }

    style() {

        let style;

        // WELL-ROUNDED
        if (
            this.scouting >= 15 &&
            this.strategy >= 15 &&
            this.tactics >= 15 &&
            this.motivation >= 15 &&
            this.training >= 15
        ) {
            style = 'Well-Rounded';
        }

        // Recruiter
        if (
            this.scouting >= this.strategy + 20 &&
            this.scouting >= this.tactics + 20 &&
            this.scouting >= this.motivation + 20 &&
            this.scouting >= this.training + 20
        ) {
            style = 'Recruiter';
        }

        // CEREBRAL
        if (
            this.strategy >= this.scouting + 20 &&
            this.strategy >= this.tactics + 20 &&
            this.strategy >= this.motivation + 20 &&
            this.strategy >= this.training + 20
        ) {
            style = 'Cerebral';
        }

        // Tactician
        if (
            this.tactics >= this.scouting + 20 &&
            this.tactics >= this.strategy + 20 &&
            this.tactics >= this.motivation + 20 &&
            this.tactics >= this.training + 20
        ) {
            style = 'Tactician';
        }

        // Motivation
        if (
            this.motivation >= this.scoutin + 20 &&
            this.motivation >= this.strategy + 20 &&
            this.motivation >= this.tactics + 20 &&
            this.motivation >= this.training + 20
        ) {

            style = 'Leader';

        }

        // TRAINING
        if (
            this.training >= this.scouting + 20 &&
            this.training >= this.strategy + 20 &&
            this.training >= this.tactics + 20 &&
            this.training >= this.motivation + 20
        ) {
            style = 'Disciplinarian';
        }

        if (
            this.strategy >= 80 &&
            this.tactics >= 80 &&
            this.motivation <= 20
        ) {

            style = 'Mad Genius';

        }


        return style || 'None';

    }

    rating() {

        let rating = 0;
        rating += this.scouting * 2;
        rating += this.strategy * 10;
        rating += this.tactics * 10;
        rating += this.motivation * 5;
        rating += this.training * 5;
        rating = Math.floor(rating / 32);
        return rating;

    }

    updateStat({ stat }) {

        console.log('UPDATING STATS FOR MANAGER');
        if (stat === 'wins') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.games = this.stats.career.games || 0;
            this.stats.career.games++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.games = this.stats.season1.games || 0;
            this.stats.season1.games++;

            this.stats.career.wins = this.stats.career.wins || 0;
            this.stats.career.wins++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.wins = this.stats.season1.wins || 0;
            this.stats.season1.wins++;

        }

        if (stat === 'losses') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.games = this.stats.career.games || 0;
            this.stats.career.games++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.games = this.stats.season1.games || 0;
            this.stats.season1.games++;

            this.stats.career.losses = this.stats.career.losses || 0;
            this.stats.career.losses++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.losses = this.stats.season1.losses || 0;
            this.stats.season1.losses++;

        }

        if (stat === 'draws') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.games = this.stats.career.games || 0;
            this.stats.career.games++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.games = this.stats.season1.games || 0;
            this.stats.season1.games++;

            this.stats.career.draws = this.stats.career.draws || 0;
            this.stats.career.draws++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.draws = this.stats.season1.draws || 0;
            this.stats.season1.draws++;

        }

    }

    levelUp() {

        if (this.tactics < 99 && Minos.range({ min: 1, max: 100 }) > 0) {

            this.tactics += 1;
            return {
                managerId: this._id,
                firstName: this.firstName,
                lastName: this.lastName,
                position: 'Manager',
                change: 'Tactics +1'
            };

        }

        return false;

    }

};
