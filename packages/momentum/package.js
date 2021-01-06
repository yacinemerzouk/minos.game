Package.describe({
    summary: "Reactive animations",
    version: "0.7.4",
    name: "meteorhubdotnet:momentum",
    git: "https://github.com/percolatestudio/meteor-momentum.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.12');
    api.use(['templating',
        'check',
        'jquery',
        'underscore',
        'meteorhubdotnet:velocityjs'
    ], 'client');

    api.addFiles([
        'momentum.html',
        'momentum.js',
        'plugins/none.js',
        'plugins/css.js',
        'plugins/velocity.js',
        'plugins/growl.js',
        'plugins/side-to-side.js',
        'plugins/slide-height.js',
        'plugins/fade.js'
    ], 'client');

    api.export(['Momentum'], 'client');

});
