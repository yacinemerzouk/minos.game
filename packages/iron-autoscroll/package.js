Package.describe({
  name: 'meteorhubdotnet:iron-autoscroll',
  version: '1.0.0',
  summary: 'Smart management of scroll position across route changes for Iron Router',
  git: 'https://github.com/okgrow/router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.0');
  api.use('promise');
  api.use('reactive-dict');
  api.use('reload');
  api.use('meteorhubdotnet:iron-router', 'client', { weak: true });
  // api.use('kadira:flow-router@2.6.2', 'client', {weak: true});
  api.addFiles('client/hot-code-push.js', 'client');
  api.addFiles('client/router-autoscroll.js', 'client');
  api.export('RouterAutoscroll', 'client');
});

