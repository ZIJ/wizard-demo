'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var StepTabListView = require('../views/stepTabListView');
var wizardTemplate = require('../templates/wizard.hbs');

module.exports = Marionette.Layout.extend({

    template: wizardTemplate,
    className: 'wizard',

    regions: {
        'tabs': '.tabs',
        'screen': '.screen'
    },

    initialize: function() {
        this.model = new Backbone.Model();
    },

    onRender: function() {
        this.tabs.show(new StepTabListView());
    },

    startWizard: function() {
        var router = this.options.app.router;
        router.navigate('wizard/0', {
            trigger: true
        });
    }

});
