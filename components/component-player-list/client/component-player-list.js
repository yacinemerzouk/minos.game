import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentPlayerList.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Keep tabs on autoruns until performance problems are solved
        Log.warn('Autorun: componentPlayerList');

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentPlayerList',
            {},
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                    // Log performance
                    // Log.warn(`[SUB] componentPlayerList: ${new Date().getTime() - this.subsStartTimestamp}ms`);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentPlayerList', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentPlayerList.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentPlayerList.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentPlayerList.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentPlayerList.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    players() {

        const players = Players.find({ teamId: { $exists: false } });
        return players;

    }

});
