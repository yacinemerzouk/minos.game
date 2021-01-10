// Namespace for package
IronTransitions = {};

IronTransitions.history = new ReactiveVar([]);

IronTransitions.addToHistory = function( routeName ){
    var priorHistory = IronTransitions.history.get();
    priorHistory.push( routeName.href );
    IronTransitions.history.set( priorHistory );
}
IronTransitions.removeFromHistory = function(){
    var priorHistory = IronTransitions.history.get();
    priorHistory.pop();
    IronTransitions.history.set( priorHistory );
}
IronTransitions.clearHistory = function() {
    IronTransitions.history.set([]);
}

// Events for layout template
// Add the following to your Meteor app:
// Template.myLayoutTemplateName.events(IronTransitions.events);
IronTransitions.events = {
	'submit form': function ( evt ) {
		IronTransitions.transition = 'iron-transition-fade';
	},
    'click a': function ( evt ) {
        IronTransitions.transition = 'iron-transition-fade';
    },
    'click a.fade-keep-history': function(){
        IronTransitions.transition = 'iron-transition-fade-keep-history';
    },
    'click a.icon-right-nav': function () {
        IronTransitions.addToHistory(Iron.Location.get());
        IronTransitions.transition = 'iron-transition-right-to-left';
    },
    'click a.navigate-right': function () {
        IronTransitions.addToHistory(Iron.Location.get());
        IronTransitions.transition = 'iron-transition-right-to-left';
    },
    'click a.transition-right': function () {
        IronTransitions.addToHistory(Iron.Location.get());
        IronTransitions.transition = 'iron-transition-right-to-left';
    },
    'click a.icon-left-nav': function () {
        IronTransitions.removeFromHistory();
        IronTransitions.transition = 'iron-transition-left-to-right';
    },
    'click a.navigate-left': function () {
        IronTransitions.removeFromHistory();
        IronTransitions.transition = 'iron-transition-left-to-right';
    },
    'click a.transition-left': function () {
        IronTransitions.removeFromHistory();
        IronTransitions.transition = 'iron-transition-left-to-right';
    },
    'click a.toggle': function( event ){
        var toggle = $(event.target);
        if( toggle.hasClass( 'active' ) ){
            toggle.removeClass( 'active' );
        }else{
            toggle.addClass( 'active' );
        }
    },
    'click a.toggle-handle': function( event ){
        var toggle = $(event.target).parent();
        if( toggle.hasClass( 'active' ) ){
            toggle.removeClass( 'active' );
        }else{
            toggle.addClass( 'active' );
        }
    }

};

// Helpers for layout template
// Add the following to your Meteor app:
// Template.myLayoutTemplateName.helpers(IronTransitions.helpers);
IronTransitions.helpers = {
    transition: function () {
        return function (from, to, element) {
            return IronTransitions.transition || 'iron-transition-fade';
        }
    }
};

// Spacebar helpers
if( Meteor.isClient ) {

    UI.registerHelper('getPreviousPage', function () {
        var history = IronTransitions.history.get();
        return history[history.length-1];
    });
    UI.registerHelper('isActive', function (args) {
        return args.hash.menu === args.hash.active ? 'active' : '';
    });
    UI.registerHelper('getCurrentRoute', function () {
        return Router.current().route.getName();
    });
    // XXX: make this a plugin itself?
    var sideToSide = function(fromX, toX) {
        return function(options) {
            options = _.extend({
                duration: 500,
                easing: 'ease-in-out'
            }, options);

            return {
                insertElement: function(node, next, done) {
                    var $node = $(node);

                    $node
                        .css('transform', 'translateX(' + fromX + ')')
                        .insertBefore(next)
                        .velocity({
                            translateX: [0, fromX]
                        }, {
                            easing: options.easing,
                            duration: options.duration,
                            queue: false,
                            complete: function() {
                                //console.log('complete');
                                $node.css('transform', '');
                                done();
                            }
                        });
                },
                removeElement: function(node, done) {
                    var $node = $(node);

                    $node
                        .velocity({
                            translateX: [toX]
                        }, {
                            duration: options.duration,
                            easing: options.easing,
                            complete: function() {
                                $node.remove();
                                done();
                            }
                        });
                }
            }
        }
    }
    Momentum.registerPlugin('iron-transition-right-to-left', sideToSide('100%', '-100%'));
    Momentum.registerPlugin('iron-transition-left-to-right', sideToSide('-100%', '100%'));
    Momentum.registerPlugin('iron-transition-fade', function(options) {
        IronTransitions.clearHistory();
        return {
            insertElement: function(node, next) {
                $(node)
                    .css('opacity', '0')
                    .insertBefore(next)
                    .velocity('fadeIn');
            },
            removeElement: function(node) {
                $(node).velocity('fadeOut', function() {
                    $(this).remove();
                });
            }
        }
    });
    Momentum.registerPlugin('iron-transition-fade-keep-history', function(options) {
        // IronTransitions.clearHistory();
        return {
            insertElement: function(node, next) {
                $(node)
                    .css('opacity', '0')
                    .insertBefore(next)
                    .velocity('fadeIn');
            },
            removeElement: function(node) {
                $(node).velocity('fadeOut', function() {
                    $(this).remove();
                });
            }
        }
    });

    Template.body.onRendered(function() {
        var device = null;

        if (/iPad|iPhone/.test(navigator.userAgent))
            device = 'ios';
        else if (/Android/.test(navigator.userAgent))
            device = 'android';
        if (device) {
            document.body.classList.add(device);
        }
    });
}
