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

    this.totalFreeAgents = new ReactiveVar(false);
    // this.subsStartTimestamp = new Date().getTime();
    //
    // AUTORUN
    this.autorun(() => {
    //
    //     // Keep tabs on autoruns until performance problems are solved
    //     Log.warn('Autorun: componentPlayerListPagination');
    //
        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();
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
        // Add data calls here
        const self = this;
        Meteor.call('componentPlayerListPagination', function(error, response) {

            if (error) {

                console.log('Could not fetch total number of players');

            } else {

                self.totalFreeAgents.set(response);

            }

        });
    //
    });

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

    rangeMin() {

        if (this.page?.params?.page) {

            return (this.page.params.page - 1) * 10 + 1;

        }
        return 1;
    },

    rangeMax() {

        if (this.page?.params?.page) {

            return this.page.params.page * 10;

        }

        return 10;

    },

    totalFreeAgents() {

        return Template.instance().totalFreeAgents.get();

    },

    nextPage() {

        if (this.page?.params?.page && this.page.params.page < Template.instance().totalFreeAgents.get() / 10) {

            return parseInt(this.page.params.page) + 1;

        } else if (!this.page?.params?.page) {

            return 2;

        }

        return false;

    },

    previousPage() {

        if (this.page?.params?.page && this.page.params.page > 1) {

            return parseInt(this.page.params.page) - 1;

        }

        return false;

    }

});
