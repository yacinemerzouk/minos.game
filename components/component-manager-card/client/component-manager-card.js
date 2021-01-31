import { Template } from 'meteor/templating';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentManagerCard.onCreated(function() {

    if (this.data.managerObject) {

        // // TRACK SUBS STATUS
        this.dataReady = new ReactiveVar(true);
        this.subsReady = new ReactiveVar(true);

    } else {

        // // TRACK SUBS STATUS
        this.dataReady = new ReactiveVar(true);
        this.subsReady = new ReactiveVar(false);

        // AUTORUN
        this.autorun(() => {

            // Reactive var to re-run subs
            // Remove this and get this sub outside of autorun if
            // the autorun is not needed.
            const templateData = Template.currentData();

            // Return all cursors from a single subscription
            this.subscribe(
                'componentManagerCard',
                { managerId: templateData.managerId },
                {
                    onReady: () => {

                        // Update reactive var
                        this.subsReady.set(true);

                    },
                },
            );

            // Add data calls here
            // Meteor.call('componentManagerCard', {}, (error, response) => {});

        });

    }

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentManagerCard.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentManagerCard.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentManagerCard.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentManagerCard.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

    manager() {

        if (this.managerObject) {

            return this.managerObject;

        } else {

            return new Manager({ managerId: this.managerId });

        }

    }


});
