'use strict';

var Marionette = require('backbone.marionette');
var StepCollection = require('../collections/stepCollection');
var StepTabView = require('../views/stepTabView');

module.exports = Marionette.CollectionView.extend({

    itemView: StepTabView,

    initialize: function() {
        this.collection = new StepCollection();
    }

});
