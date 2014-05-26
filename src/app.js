'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var sampleSteps = require('./steps');
var StepCollection = require('./collections/stepCollection');
var AppRouter = require('./routers/appRouter');
var AppController = require('./controllers/appController');

Backbone.$ = Marionette.$ = $;

var app = new Marionette.Application();
var appController = new AppController({
    app: app
});
var router = new AppRouter({
    controller: appController
});

app.addRegions({
    main: 'main'
});

app.addInitializer(function() {

    console.log('app started!');

    var steps = new StepCollection();

    steps.reset(sampleSteps);
    console.log(steps);
});

app.on('initialize:after', function () {
    Backbone.history.start();
    router.navigate('welcome', {
        trigger: true
    });
});

app.start();
