'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var welcomeTemplate = require('../templates/welcome.hbs');

module.exports = Marionette.ItemView.extend({

    template: welcomeTemplate,

    events: {
        'click .action.start': 'startWizard'
    },

    initialize: function() {
        this.model = new Backbone.Model();
    },

    startWizard: function() {
        var router = this.options.app.router;
        router.navigate('wizard/0', {
            trigger: true
        });
    }

});
