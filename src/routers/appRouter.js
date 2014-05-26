'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        'welcome': 'showScreen',
        'wizard/:step': 'handleWizardStep'
    },

    onRoute: function() {
        console.log('routing');
    }

});
