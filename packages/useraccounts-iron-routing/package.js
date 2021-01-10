// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'meteorhubdotnet:useraccounts-iron-routing',
  summary: 'UserAccounts package providing routes configuration capability via iron:router.',
  version: '1.14.2',
  git: 'https://github.com/meteor-useraccounts/iron-routing.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.12');

  api.use([
    'check',
    'meteorhubdotnet:iron-router',
    'underscore',
    'meteorhubdotnet:useraccounts-core',
  ], ['client', 'server']);

  api.imply([
    'meteorhubdotnet:useraccounts-core',
    'meteorhubdotnet:iron-router',
  ], ['client', 'server']);

  api.addFiles([
    'lib/core.js',
    'lib/server.js',
  ], ['server']);

  api.addFiles([
    'lib/core.js',
    'lib/client.js',
    'lib/templates_helpers/at_input.js',
  ], ['client']);
});
