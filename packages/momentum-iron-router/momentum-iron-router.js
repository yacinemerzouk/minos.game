var Transitioner = {
  renders: [],
  start: function() {
    var self = this;
    
    // a single autorun that keeps a list of rendered pages
    Deps.autorun(function() {
      if (! Router.current())
        return;
  
      var render = {
        path: Router.current().path,
        template: Router._layout.region('main').template(),
        initiator: Router.current().options.initiator
      };
  
      self.renders.unshift(render);
    });
  },
  
}
Transitioner.start();

Momentum.registerPlugin('iron-router', function(options) {
  check(options.options, Match.Optional(Function));
  
  var getPluginOptions = function(node) {
    var type = options.options &&
      options.options(Transitioner.renders[1], Transitioner.renders[0], node);

    if (_.isUndefined(type))
      type = 'none'; // XXX: what should this be?

    return type;
  }
  
  var getPlugin = function(node) {
    var pluginOptions = getPluginOptions(node)
    
    if (_.isString(pluginOptions))
      pluginOptions = {with: pluginOptions};
    
    var plugin = Momentum.plugins[pluginOptions.with];
    if (! plugin)
      return console.error("Can't find momentum plugin '" + pluginOptions.with + "'");
    
    var pluginOptions = _.extend(_.omit(options, 'options'), pluginOptions);
    return plugin(_.omit(pluginOptions, 'with'));
  }
  
  return {
    insertElement: function(node, next, done) {
      getPlugin(node).insertElement(node, next, done);
    },
    moveElement: function(node, next, done) {
      getPlugin(node).moveElement(node, next, done);
    },
    removeElement: function(node, done) {
      getPlugin(node).removeElement(node, done);
    },
    // force: true
  }
});