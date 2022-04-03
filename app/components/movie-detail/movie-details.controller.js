angular.module('tvShowsApp')
    .component('movieDetail', {
        templateUrl: 'components/movie-detail/movie-detail.template.html',
        bindings: {
            modalInstance: "<",
            resolve: "<"
        },
        controller: function MovieDetail () {
            var $ctrl = this;

            $ctrl.$onInit = function () {
                $ctrl.modalData = $ctrl.resolve.modalData;
            }
            
            $ctrl.handleDismiss = function () {
                $ctrl.modalInstance.dismiss("cancel");
            };
        }
    });