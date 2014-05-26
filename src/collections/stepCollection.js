'use strict';

var Backbone = require('backbone');
var StepModel = require('../models/stepModel');
var sampleSteps = require('../steps');

module.exports = Backbone.Collection.extend({
    model: StepModel,

    initialize: function() {
        this.reset(sampleSteps);
    }
});