angular.
    module('tvShowsApp').
    component('appHeader', {
        templateUrl: 'components/header/header.template.html',
        bindings: {
            key: '<',
            onKeyChange: '&'
        },
        controller: function HeaderController() {
            var $ctrl = this;
            
            $ctrl.$onInit = function () {
                this.key = 'Luci';
                this.setKey();
            }

            $ctrl.setKey = function () {
                this.onKeyChange({ $event: { key: this.key } });
            };
        }
    });