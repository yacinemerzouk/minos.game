import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentPlayerListPagination.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(true);
    // this.subsStartTimestamp = new Date().getTime();
    //
    // // AUTORUN
    // this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentPlayerListPagination');
    //
    //     // Reactive var to re-run subs
    //     // Remove this and get this sub outside of autorun if
    //     // the autorun is not needed.
    //     const templateData = Template.currentData();
    //
    //     // Return all cursors from a single subscription
    //     this.subscribe(
    //         'componentPlayerListPagination',
    //         {},
    //         {
    //             onReady: () => {
    //
    //                 // Update reactive var
    //                 this.subsReady.set(true);
    //
    //                 // Log performance
    //                 // Log.warn(`[SUB] componentPlayerListPagination: ${new Date().getTime() - this.subsStartTimestamp}ms`);
    //
    //             },
    //         },
    //     );
    //
    //     // Add data calls here
    //     // Meteor.call('componentPlayerListPagination', {}, (error, response) => {});
    //
    // });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentPlayerListPagination.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentPlayerListPagination.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentPlayerListPagination.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentPlayerListPagination.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

});
