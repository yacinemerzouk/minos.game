Meteor.methods({

    componentPlayerListPagination() {

       return Players.find({ $or: [{ teamId: { $exists: false } }, {teamId: ''}] }).count();

    },

});
