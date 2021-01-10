Player = class {

    constructor({ playerId } = {}) {

        let playerData = {};

        // check for email or user ID or userSlug
        if (playerId) {

            playerData = Players.findOne({ _id: playerId });

        }


        // Set members of object
        if (playerData) {

            const playerDataProperties = Object.keys(playerData);
            for (let i = 0; i < playerDataProperties.length; i += 1) {

                const prop = playerDataProperties[i];
                this[prop] = playerData[prop];

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
            rating += this.throw * 1;
            rating += this.catch * 1;
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
            rating += this.throw * 1;
            rating += this.catch * 20;
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
            rating += this.throw * 1;
            rating += this.catch * 1;
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
            rating += this.throw * 20;
            rating += this.catch * 1;
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
            rating += this.throw * 1;
            rating += this.catch * 1;
            rating += this.evade * 5;
            rating += this.gore * 1;
            rating += this.maze * 5;
            rating = Math.floor(rating / 37);
            return rating;

        }

        return 0;

    }



};
