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

};
