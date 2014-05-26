'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

Backbone.$ = Marionette.$ = $;

var app = new Marionette.Application();

app.addInitializer(function() {
    console.log('app started!');
});

app.on('initialize:after', function () {
    Backbone.history.start();
});

app.start();
