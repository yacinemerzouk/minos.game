Player = class {

    constructor({ playerData, playerId } = {}) {

        let player = playerData || {};

        // check for email or user ID or userSlug
        if (playerId) {

            player = Players.findOne({ _id: playerId });

        }


        // Set members of object
        if (player) {

            const playerDataProperties = Object.keys(player);
            for (let i = 0; i < playerDataProperties.length; i += 1) {

                const prop = playerDataProperties[i];
                this[prop] = player[prop];

            }

        }

    }

    /**
     * Assigns playerData values to members
     * @param playerData
     */
    populate({ playerData }) {

        if (playerData) {

            Object.assign(this, playerData);

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

        this._id = Players.insert(this);
        return !!this._id;

    }

    update() {

        return Players.update({ _id: this._id }, { $set: this });

    }

    remove() {

        return Players.remove({ _id: this._id });

    }

    offensiveAbility() {

        let rating = 0;
        rating += this.strength * 2;
        rating += this.dexterity * 3;
        rating += this.anticipation * 3;
        rating += this.quickness * 3;
        rating += this.evade * 1;
        rating += this.maze * 1;
        return Math.floor(rating / 13);

    }

    defensiveAbility() {
        let rating = 0;
        rating += this.strength * 3;
        rating += this.dexterity * 1;
        rating += this.fortitude * 1;
        rating += this.anticipation * 3;
        rating += this.quickness * 3;
        rating += this.gore * 1;
        rating += this.maze * 1;
        return Math.floor(rating / 13);
    }

    goreAttack() {
        let rating = 0;
        rating += this.strength * 3;
        rating += this.dexterity * 1;
        rating += this.anticipation * 2;
        rating += this.quickness * 1;
        rating += this.gore * 5;
        rating += this.maze * 1;
        return Math.floor(rating / 13);
    }

    goreDefence() {
        let rating = 0;
        rating += this.strength * 1;
        rating += this.dexterity * 2;
        rating += this.anticipation * 3;
        rating += this.quickness * 3;
        rating += this.evade * 5;
        rating += this.gore * 1;
        rating += this.maze * 1;
        return Math.floor(rating / 16);
    }

    rating() {

        // Primary = Strength @ 20 / 50-100
        // Secondary = Fortitude, Gore @ 5 / 30-100
        // Others @ 1 / 1-100
        if (this.position === 'brute') {

            let rating = 0;
            rating += this.strength * 20;
            rating += this.dexterity * 1;
            rating += this.fortitude * 5;
            rating += this.anticipation * 1;
            rating += this.quickness * 1;
            rating += this.throwing * 1;
            rating += this.catching * 1;
            rating += this.evade * 1;
            rating += this.gore * 5;
            rating += this.maze * 1;
            rating = Math.floor(rating / 37);
            return rating;

        }

        // Primary = Catch @ 20 / 50-100
        // Secondary = Dexterity, Anticipation @ 5 / 30-100
        // Others @ 1 / 1-100
        if (this.position === 'climber') {

            let rating = 0;
            rating += this.strength * 1;
            rating += this.dexterity * 5;
            rating += this.fortitude * 1;
            rating += this.anticipation * 5;
            rating += this.quickness * 1;
            rating += this.throwing * 1;
            rating += this.catching * 20;
            rating += this.evade * 1;
            rating += this.gore * 1;
            rating += this.maze * 1;
            rating = Math.floor(rating / 37);
            return rating;

        }

        // Primary = Anticipation @ 20 / 50-100
        // Secondary = Evade, Gore @ 5 / 30-100
        // Others @ 1 / 1-100
        if (this.position === 'poacher') {

            let rating = 0;
            rating += this.strength * 1;
            rating += this.dexterity * 1;
            rating += this.fortitude * 1;
            rating += this.anticipation * 20;
            rating += this.quickness * 1;
            rating += this.throwing * 1;
            rating += this.catching * 1;
            rating += this.evade * 5;
            rating += this.gore * 5;
            rating += this.maze * 1;
            rating = Math.floor(rating / 37);
            return rating;

        }

        // Primary = Throw @ 20 / 50-100
        // Secondary = Maze, Anticipation @ 5 / 30-100
        // Others @ 1 / 1-100
        if (this.position === 'thrower') {

            let rating = 0;
            rating += this.strength * 1;
            rating += this.dexterity * 1;
            rating += this.fortitude * 1;
            rating += this.anticipation * 5;
            rating += this.quickness * 1;
            rating += this.throwing * 20;
            rating += this.catching * 1;
            rating += this.evade * 1;
            rating += this.gore * 1;
            rating += this.maze * 5;
            rating = Math.floor(rating / 37);
            return rating;

        }

        // Primary = Quickness @ 20 / 50-100
        // Secondary = Evade, Maze @ 5 / 30-100
        // Others @ 1 / 1-100
        if (this.position === 'runner') {

            let rating = 0;
            rating += this.strength * 1;
            rating += this.dexterity * 1;
            rating += this.fortitude * 1;
            rating += this.anticipation * 1;
            rating += this.quickness * 20;
            rating += this.throwing * 1;
            rating += this.catching * 1;
            rating += this.evade * 5;
            rating += this.gore * 1;
            rating += this.maze * 5;
            rating = Math.floor(rating / 37);
            return rating;

        }

        return 0;

    }

    addEvent({ event,  eventProperties }) {

    }

    updateStat({ stat }) {

        if (stat === 'games') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.games = this.stats.career.games || 0;
            this.stats.career.games++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.games = this.stats.season1.games || 0;
            this.stats.season1.games++;

        }

        if (stat === 'gores') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.gores = this.stats.career.gores || 0;
            this.stats.career.gores++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.gores = this.stats.season1.gores || 0;
            this.stats.season1.gores++;

        }

        if (stat === 'scores') {

            this.stats = this.stats || {};
            this.stats.career = this.stats.career || {};
            this.stats.career.scores = this.stats.career.scores || 0;
            this.stats.career.scores++;
            this.stats.season1 = this.stats.season1 || {};
            this.stats.season1.scores = this.stats.season1.scores || 0;
            this.stats.season1.scores++;

        }

    }

    levelUp() {

        const rand = Minos.range({ min: 1, max: 100 });

        if (rand > 60) {

            const levelUpdData = {
                playerId: this._id,
                teamId: this.teamId,
                firstName: this.firstName,
                lastName: this.lastName,
                position: this.position,
                changes: []
            }

            if (this.strength < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 3 });

                    // Don't increase too fast near 99
                    if (this.strength + increase > 90) {
                        increase = 1;
                    }

                    this.strength += increase;
                    levelUpdData.changes.push({
                        change: `Strength +${increase}`,
                        newRating: this.strength
                    });

                }

            }

            if (this.dexterity < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.dexterity + increase > 90) {
                        increase = 1;
                    }

                    this.dexterity += increase;
                    levelUpdData.changes.push({
                        change: `Dexterity +${increase}`,
                        newRating: this.dexterity
                    });

                }

            }

            if (this.fortitude < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.fortitude + increase > 90) {
                        increase = 1;
                    }

                    this.fortitude += increase;
                    levelUpdData.changes.push({
                        change: `Fortitude +${increase}`,
                        newRating: this.fortitude
                    });

                }

            }

            if (this.anticipation < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.anticipation + increase > 90) {
                        increase = 1;
                    }

                    this.anticipation += increase;
                    levelUpdData.changes.push({
                        change: `Anticipation +${increase}`,
                        newRating: this.anticipation
                    });

                }

            }

            if (this.quickness < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.quickness + increase > 90) {
                        increase = 1;
                    }

                    this.quickness += increase;
                    levelUpdData.changes.push({
                        change: `Quickness +${increase}`,
                        newRating: this.quickness
                    });

                }

            }

            if (this.throwing < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.throwing + increase > 90) {
                        increase = 1;
                    }

                    this.throwing += increase;
                    levelUpdData.changes.push({
                        change: `Throwing +${increase}`,
                        newRating: this.throwing
                    });

                }

            }

            if (this.catching < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.catching + increase > 90) {
                        increase = 1;
                    }

                    this.catching += increase;
                    levelUpdData.changes.push({
                        change: `Catching +${increase}`,
                        newRating: this.catching
                    });

                }

            }

            if (this.evade < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 1 });

                    // Don't increase too fast near 99
                    if (this.evade + increase > 90) {
                        increase = 1;
                    }

                    this.evade += increase;
                    levelUpdData.changes.push({
                        change: `Evade +${increase}`,
                        newRating: this.evade
                    });

                }

            }

            if (this.gore < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 3 });

                    // Don't increase too fast near 99
                    if (this.gore + increase > 90) {
                        increase = 1;
                    }

                    this.gore += increase;
                    levelUpdData.changes.push({
                        change: `Gore +${increase}`,
                        newRating: this.gore
                    });

                }

            }

            if (this.maze < 99 ) {

                const randomIncreaseChance = Minos.range({ min: 1, max: 3 });

                if (randomIncreaseChance === 1) {

                    let increase = Minos.range({ min: 1, max: 3 });

                    // Don't increase too fast near 99
                    if (this.maze + increase > 90) {
                        increase = 1;
                    }

                    this.maze += increase;
                    levelUpdData.changes.push({
                        change: `Maze +${increase}`,
                        newRating: this.maze
                    });

                }

            }



            return levelUpdData.changes ? levelUpdData : false;

        }

        return false;

    }

};
