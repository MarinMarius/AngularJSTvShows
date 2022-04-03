angular.
    module('tvShowsApp').
    component('appHeader', {
        templateUrl: 'components/header/header.template.html',
        bindings: {
            key: '<',
            onKeyChange: '&'
        },
        controller: function HeaderController() {
            this.setKey = function () {
                this.onKeyChange({ $event: { key: this.key } });
            }.bind(this);
        }
    });