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
            { teamId: templateData.teamId },
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

        console.log('Click play!');

        // Prevent default event behavior
        event.preventDefault();

        // Mark team as queued
        const team = new Team({ teamId: templateInstance.data.teamId });
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

    canEnterTheArena() {

        return Players.find({ teamId: this.teamId }).count() >= 6;

    },

    team() {

        return new Team({ teamId: this.teamId });

    },

    inArenaQueue() {

        const team = new Team({ teamId: this.teamId });
        console.log('Team in arena queue?', team.inArenaQueue);

        return team.inArenaQueue;

    },

    // hasNewResults() {
    //
    //     const team = new Team({ teamId: this.teamId });
    //     return team.hasNewResults;
    //
    // }

});
