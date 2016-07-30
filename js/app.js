requirejs.config({
  // Path mappings for the logical module names
  paths: {
   'knockout': '/bower_components/knockout/dist/knockout',
    'jquery': '/bower_components/jquery/dist/jquery.min',
    'jqueryui-amd': '/bower_components/jquery-ui/ui',
    'promise': '/bower_components/es6-promise/promise.min',
    'hammerjs': '/bower_components/hammerjs/hammer.min',
    'ojdnd': '/bower_components/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    'ojs': '/bower_components/oraclejet/dist/js/libs/oj/debug',
    'ojL10n': '/bower_components/oraclejet/dist/js/libs/oj/ojL10n',
    'ojtranslations': '/bower_components/oraclejet/dist/js/libs/oj/resources',
    'signals': '/bower_components/js-signals/dist/signals.min',
    'text': '/bower_components/text/text'

  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jqueryui-amd': {
      exports: "$",
      deps: ['jquery']
    },
    'jquery': {
      exports: ['jQuery', '$']
    }
  },
  config: {
    ojL10n: {
      merge: {
        //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
        // The following addes en-US to the r.js bundle
        //'ojtranslations/nls/ojtranslations': '../../oj/resources/nls/en-US/localeElements'
      }
    }
  }
});

require(['knockout',
  'ojs/ojcore',
  'jquery',
  'ojs/ojknockout',
  'ojs/ojprogressbar',
  'ojs/ojinputtext'
], function(ko, oj, $) {
  'use strict';

  var ViewModel = function() {
     var self = this;
     self.message = ko.observable("Hello!!!");
     self.progressValue = ko.observable(20);
     self.name = ko.observable();
     self.address = ko.observable();
     self.city = ko.observable();

  };
  ko.applyBindings(new ViewModel());
});