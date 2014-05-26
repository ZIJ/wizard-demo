'use strict';

var Marionette = require('backbone.marionette');
var stepTabTemplate = require('../templates/stepTab.hbs');

module.exports = Marionette.ItemView.extend({

    template: stepTabTemplate

});
