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

Momentum.registerPlugin('right-to-left', sideToSide('100%', '-100%'));
Momentum.registerPlugin('left-to-right', sideToSide('-100%', '100%'));

