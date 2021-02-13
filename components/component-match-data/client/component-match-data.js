import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentMatchData.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(true);

    this.activeTab = new ReactiveVar('gold');

    // this.subsStartTimestamp = new Date().getTime();
    //
    // // AUTORUN
    // this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentMatchData');
    //
    //     // Reactive var to re-run subs
    //     // Remove this and get this sub outside of autorun if
    //     // the autorun is not needed.
    //     const templateData = Template.currentData();
    //
    //     // Return all cursors from a single subscription
    //     this.subscribe(
    //         'componentMatchData',
    //         {},
    //         {
    //             onReady: () => {
    //
    //                 // Update reactive var
    //                 this.subsReady.set(true);
    //
    //                 // Log performance
    //                 // Log.warn(`[SUB] componentMatchData: ${new Date().getTime() - this.subsStartTimestamp}ms`);
    //
    //             },
    //         },
    //     );
    //
    //     // Add data calls here
    //     // Meteor.call('componentMatchData', {}, (error, response) => {});
    //
    // });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentMatchData.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentMatchData.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentMatchData.events({

    /**
     * @event Change tab
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="tab"]': (event, templateInstance) => {

        console.log('tab', event.target.data);
        // Prevent default event behavior
        event.preventDefault();

        templateInstance.activeTab.set(event.target.dataset.tabName);

    },

});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentMatchData.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    activeTab() {

        return Template.instance().activeTab.get();
    }

});
