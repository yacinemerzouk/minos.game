// import { Teams } from '/api/teams/teams-collection.js';

User = class {

    constructor({ userId } = {}) {

        let userData = {};

        // check for email or user ID or userSlug
        if (userId) {

            userData = Meteor.users.findOne({ _id: userId });

        }

        // Set members of object
        if (userData) {

            const userDataProperties = Object.keys(userData);
            for (let i = 0; i < userDataProperties.length; i += 1) {

                const prop = userDataProperties[i];
                this[prop] = userData[prop];

            }

        }

    }

    teams() {

        const teams = Teams.find({ userId: Meteor.userId() }).fetch();
		return teams;
		
    }

};
