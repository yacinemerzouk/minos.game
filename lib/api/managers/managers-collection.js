import SimpleSchema from 'simpl-schema';

class ManagersCollection extends Mongo.Collection {

    insert(manager, callback) {

        return super.insert(manager, callback);

    }

    update(selector, manager, callback) {

        return super.update(selector, manager, callback);

    }

    remove(selector, callback) {

        return super.remove(selector, callback);

    }

}

Managers = new ManagersCollection('minos_managers');

Managers.allow({

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

const managersSchema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id },
    userId: { type: String, optional: true },
    teamId: { type: String, optional: true },
    firstName: { type: String, optional: false },
    lastName: { type: String, optional: false },
    scouting: { type: Number, optional: false },
    strategy: { type: Number, optional: false },
    tactics: { type: Number, optional: false },
    motivation: { type: Number, optional: false },
    training: { type: Number, optional: false },
    stats: { type: Object, optional: true, blackbox: true },
});

Managers.attachSchema(managersSchema);

const generateStat = function({ min, max }) {

    return Math.floor(min + Math.random() * (max - min));

};

Managers.random = function() {

    const manager = {};
    manager.firstName = getFirstName();
    manager.lastName = getLastName();
    manager.scouting = generateStat({ min: 1, max: 100 });
    manager.strategy = generateStat({ min: 1, max: 100 });
    manager.tactics = generateStat({ min: 1, max: 100 });
    manager.motivation = generateStat({ min: 1, max: 100 });
    manager.training = generateStat({ min: 1, max: 100 });
    
    return manager;

};
