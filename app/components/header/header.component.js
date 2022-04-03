angular.
    module('tvShowsApp').
    component('appHeader', {
        templateUrl: 'components/header/header.template.html',
        controller: function HeaderController() {
            console.log('header');
        }
    });