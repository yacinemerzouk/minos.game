import { Template } from 'meteor/templating';
// import { User } from '/api/users/user-model.js';
// import { Teams } from '/api/teams/teams-collection.js';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentTeamsList.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Keep tabs on autoruns until performance problems are solved
        Log.warn('Autorun: componentTeamsList');

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentTeamsList',
            {},
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                    // Log performance
                    Log.warn(`[SUB] componentTeamsList: ${new Date().getTime() - this.subsStartTimestamp}ms`);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentTeamsList', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentTeamsList.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentTeamsList.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentTeamsList.events({});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentTeamsList.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },
	
	teams() {
		
		const user = new User({ userId: Meteor.userId() });
		const teams = user.teams();
		return teams;
		
	},

});
