import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentPlayerActions.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(true);
    this.subsStartTimestamp = new Date().getTime();

    // // AUTORUN
    // this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentPlayerActions');
    //
    //     // Reactive var to re-run subs
    //     // Remove this and get this sub outside of autorun if
    //     // the autorun is not needed.
    //     const templateData = Template.currentData();
    //
    //     // Return all cursors from a single subscription
    //     this.subscribe(
    //         'componentPlayerActions',
    //         {},
    //         {
    //             onReady: () => {
    //
    //                 // Update reactive var
    //                 this.subsReady.set(true);
    //
    //                 // Log performance
    //                 // Log.warn(`[SUB] componentPlayerActions: ${new Date().getTime() - this.subsStartTimestamp}ms`);
    //
    //             },
    //         },
    //     );
    //
    //     // Add data calls here
    //     // Meteor.call('componentPlayerActions', {}, (error, response) => {});
    //
    // });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentPlayerActions.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentPlayerActions.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentPlayerActions.events({

    /**
     * DESCRIBE_EVENT_HANDLER
     * @event EVENT_GOES_HERE [hook="HOOK_GOES_HERE"]
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="hire"]': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        const player = new Player({ playerId: templateInstance.data.player._id });
        player.teamId = templateInstance.data.team._id;
        console.log(`About to save teamId ${templateInstance.data.team._id} for player ${templateInstance.data.player._id}`);
        const saved = player.save();

        if (saved) {
            Router.go('pageTeamPlayers', { teamId: templateInstance.data.team._id });
        } else {
            console.log('Error saving teamId for free agent player.');
        }

    },

});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentPlayerActions.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

});
