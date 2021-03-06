import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentPlayButton.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Keep tabs on autoruns until performance problems are solved
        Log.warn('Autorun: componentPlayButton');

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentPlayButton',
            { teamId: templateData.team._id },
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                    // Log performance
                    Log.warn(`[SUB] componentPlayButton: ${new Date().getTime() - this.subsStartTimestamp}ms`);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentPlayButton', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentPlayButton.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentPlayButton.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentPlayButton.events({

    /**
     * Enter the arena!
     * @event click [hook="play"]
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="play"]': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        // Mark team as queued
        const team = templateInstance.currentData().team;
        team.inArenaQueue = true;
        team.save();

    },

});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentPlayButton.helpers({

    subsAndDataReady() {

        // Return true if there is team data
        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    hasManager() {

        return this.team.nbManagers() >= 1;

    },

    hasEnoughPlayers() {

        return this.team.nbPlayers() >= 6;

    },

});
