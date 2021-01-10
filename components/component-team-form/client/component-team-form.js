import { Template } from 'meteor/templating';
// import { Team } from '/api/teams/team-model.js';

/**
 * =============================================================
 * TEMPLATE CREATED
 * =============================================================
 */
Template.componentTeamForm.onCreated(function() {

    // TRACK SUBS STATUS
    this.dataReady = new ReactiveVar(true);
    this.subsReady = new ReactiveVar(false);
    this.subsStartTimestamp = new Date().getTime();

    // AUTORUN
    this.autorun(() => {

        // Keep tabs on autoruns until performance problems are solved
        Log.warn('Autorun: componentTeamForm');

        // Reactive var to re-run subs
        // Remove this and get this sub outside of autorun if
        // the autorun is not needed.
        const templateData = Template.currentData();

        // Return all cursors from a single subscription
        this.subscribe(
            'componentTeamForm',
            {},
            {
                onReady: () => {

                    // Update reactive var
                    this.subsReady.set(true);

                    // Log performance
                    // Log.warn(`[SUB] componentTeamForm: ${new Date().getTime() - this.subsStartTimestamp}ms`);

                },
            },
        );

        // Add data calls here
        // Meteor.call('componentTeamForm', {}, (error, response) => {});

    });

});

/**
 * =============================================================
 * TEMPLATE RENDERED
 * =============================================================
 */
Template.componentTeamForm.onRendered(function() {});

/**
 * =============================================================
 * TEMPLATE DESTROYED
 * =============================================================
 */
Template.componentTeamForm.onDestroyed(function() {});

/**
 * =============================================================
 * TEMPLATE EVENTS
 * =============================================================
 */
Template.componentTeamForm.events({
	
	/**
	 * Save team form
	 * @param event DOM event
	 * @param templateInstance Blaze template instance
	 */
	'submit [hook="team-form"]': (event, templateInstance) => {
		
		// Prevent default event behavior
		event.preventDefault();
		
		// Get form data
		const formData = Bureaucrat.getFormData($(event.target));
		const teamName = formData.teamName;
		const teamColor = formData.teamColor;
		
		// Create an empty team
		const team = new Team();
		
		// Populate with new data
		const teamData = {
			userId: Meteor.userId(),
			teamName: formData.teamName,
			teamColor: formData.teamColor,
			wins: 0,
			losses: 0,
			draws: 0
		}
		team.populate({ teamData });
		console.log(teamData);
		console.log(team);

		// And save!
		const teamSaved = team.save();
		
		// UI Feedback
		if (teamSaved) {
			
			Router.go('pageHome');
			
		} else {
			
			console.log('Could not save team...');
			
		}
			
	},
	
});

/**
 * =============================================================
 * TEMPLATE HELPERS
 * =============================================================
 */
Template.componentTeamForm.helpers({

    subsAndDataReady() {

        return Template.instance().subsReady.get() && Template.instance().dataReady.get();

    },

});
