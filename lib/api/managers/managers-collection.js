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
    userId: { type: String, optional: false },
});

Managers.attachSchema(managersSchema);