angular.module('tvShowsApp')
    .component('myModal', {
        templateUrl: 'components/movie-detail/movie-detail.template.html',
        bindings: {
            modalInstance: "<",
            resolve: "<"
        },
        controller: [function () {
            var $ctrl = this;
            $ctrl.$onInit = function () {
                $ctrl.modalData = $ctrl.resolve.modalData;
            }
            $ctrl.handleClose = function () {
                $ctrl.modalInstance.close($ctrl.modalData);
            };
            $ctrl.handleDismiss = function () {
                $ctrl.modalInstance.dismiss("cancel");
            };
        }]
    });