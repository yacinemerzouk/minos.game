import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentFooter.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(true);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    // this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentFooter');
    //
    //     // Reactive var to re-run subs
    //     // Remove this and get this sub outside of autorun if
    //     // the autorun is not needed.
    //     const templateData = Template.currentData();
    //
    //     // Return all cursors from a single subscription
    //     this.subscribe(
    //         'componentFooter',
    //         {},
    //         {
    //             onReady: () => {
    //
    //                 // Update reactive var
    //                 this.subsReady.set(true);
    //
    //                 // Log performance
    //                 // Log.warn(`[SUB] componentFooter: ${new Date().getTime() - this.subsStartTimestamp}ms`);
    //
    //             },
    //         },
    //     );
    //
    //     // Add data calls here
    //     // Meteor.call('componentFooter', {}, (error, response) => {});
    //
    // });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentFooter.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentFooter.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentFooter.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentFooter.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    showTeamFooter() {
        console.log(this.page);
        return this.page.team;
    }

});
