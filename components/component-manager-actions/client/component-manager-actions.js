import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentManagerActions.onCreated(function() {

    // // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentManagerActions',
            { teamId: templateData.teamId },
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentManagerActions', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentManagerActions.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentManagerActions.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentManagerActions.events({

    /**
     * Hire manager
     * @event click [hook="hire"]
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="hire"]': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        // Look for existing manager first
        const currentManager = new Manager({ teamId: templateInstance.data.teamId });
        if (currentManager?._id) {
            currentManager.teamId = '';
            const deleted = currentManager.save();
        }

        const manager = new Manager({ managerId: templateInstance.data.managerId });
        manager.teamId = templateInstance.data.teamId;
        const saved = manager.save();
        Router.go('pageTeamManager', { teamId: templateInstance.data.teamId });

    },

});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentManagerActions.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

});
