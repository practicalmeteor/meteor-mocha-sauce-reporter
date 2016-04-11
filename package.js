Package.describe({
  name: 'practicalmeteor:mocha-sauce-reporter',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/practicalmeteor/meteor-mocha-sauce-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('coffeescript');
  api.mainModule('SauceReporter.coffee');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('practicalmeteor:mocha-sauce-reporter');
});
