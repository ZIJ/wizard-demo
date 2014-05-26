'use strict';

var Backbone = require('backbone');
var StepModel = require('../models/stepModel');

module.exports = Backbone.Collection.extend({
    model: StepModel
});