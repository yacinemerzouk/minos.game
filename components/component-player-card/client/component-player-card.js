import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentPlayerCard.onCreated(function() {

    // // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(true);
    // this.subsStartTimestamp = new Date().getTime();
    //
    // // AUTORUN
    // this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentPlayerCard');
    //
    //     // Reactive var to re-run subs
    //     // Remove this and get this sub outside of autorun if
    //     // the autorun is not needed.
    //     const templateData = Template.currentData();
    //
    //     // Return all cursors from a single subscription
    //     this.subscribe(
    //         'componentPlayerCard',
    //         {},
    //         {
    //             onReady: () => {
    //
    //                 // Update reactive var
    //                 this.subsReady.set(true);
    //
    //                 // Log performance
    //                 // Log.warn(`[SUB] componentPlayerCard: ${new Date().getTime() - this.subsStartTimestamp}ms`);
    //
    //             },
    //         },
    //     );
    //
    //     // Add data calls here
    //     // Meteor.call('componentPlayerCard', {}, (error, response) => {});
    //
    // });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentPlayerCard.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentPlayerCard.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentPlayerCard.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentPlayerCard.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

});
