requirejs.config({
    paths: {
        jquery: 'lib/jquery/jquery',
        jqueryui: 'lib/jquery-ui/jquery-ui',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        handlebars: 'lib/handlebars/handlebars',
        firebase: 'lib/firebase/firebase',
        backbonefire: 'lib/firebase/backbonefire.min',
        text: 'lib/require-js/text',
        totop: 'lib/back-to-top',
        smoothScroll: 'lib/smoothScroll',
        bootstrap: 'lib/bootstrap.min',
        wow: 'lib/wow.min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'backbonefire': {
            deps: ['backbone', 'firebase', 'underscore']
        },
        'totop': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

requirejs([
    'app'
], function (Blog) {
     new Blog();
});