Package.describe({
  name: 'meteorhubdotnet:velocityjs',
  summary: "Wrapper for velocity.js includes ui pack",
  version: "1.2.1",
  git: "https://github.com/percolatestudio/meteor-velocityjs.git"
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@2.0');

  api.addFiles(['velocity.js', 'velocity.ui.js'], 'client');
});
