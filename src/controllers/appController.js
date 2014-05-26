'use strict';

var Marionette = require('backbone.marionette');
var WelcomeScreen = require('../views/welcomeScreen');
var WizardLayout = require('../views/wizardLayout');

module.exports = Marionette.Controller.extend({

    initialize: function(options){

    },

    showScreen: function() {
        var app = this.options.app;
        app.main.show(new WelcomeScreen({
            app: app
        }));
    },

    handleWizardStep: function(step) {
        var app = this.options.app;
        app.main.show(new WizardLayout());
        console.log('wizard step ' + step);
    }

});
