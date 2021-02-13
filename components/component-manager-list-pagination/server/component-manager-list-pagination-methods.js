Meteor.methods({

    componentManagerListPagination() {

        return Managers.find({ $or: [{ teamId: { $exists: false } }, {teamId: ''}] }).count();

    },

});
