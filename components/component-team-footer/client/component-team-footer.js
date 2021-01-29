import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentTeamFooter.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Keep tabs on autoruns until performance problems are solved
        Log.warn('Autorun: componentTeamFooter');

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentTeamFooter',
            { teamId: templateData.teamId },
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                    // Log performance
                    Log.warn(`[SUB] componentTeamFooter: ${new Date().getTime() - this.subsStartTimestamp}ms`);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentTeamFooter', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentTeamFooter.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentTeamFooter.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentTeamFooter.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentTeamFooter.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    team() {

        const team = Teams.findOne({ _id: this.teamId });
        return team;

    }

});
