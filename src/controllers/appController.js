'use strict';

var Marionette = require('backbone.marionette');
var WelcomeScreen = require('../views/welcomeScreen');

module.exports = Marionette.Controller.extend({

    initialize: function(options){

    },

    showScreen: function() {
        var app = this.options.app;
        app.main.show(new WelcomeScreen());
    }

});
