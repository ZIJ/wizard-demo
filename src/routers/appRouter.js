'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        'welcome': 'showScreen'
    },

    onRoute: function() {
        console.log('routing');
    }

});
