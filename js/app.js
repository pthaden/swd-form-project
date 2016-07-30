requirejs.config({
  // Path mappings for the logical module names
  paths: {
   'knockout': 'libs/knockout/knockout-3.4.0',
    'jquery': 'libs/jquery/jquery-2.1.3.min',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
    'promise': 'libs/es6-promise/promise-1.0.0.min',
    'hammerjs': 'libs/hammer/hammer-2.0.4.min',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
    'ojs': 'libs/oj/v2.0.2/debug',
    'ojL10n': 'libs/oj/v2.0.2/ojL10n',
    'ojtranslations': 'libs/oj/v2.0.2/resources',
    'signals': 'libs/js-signals/signals.min',
    'text': 'libs/require/text'

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