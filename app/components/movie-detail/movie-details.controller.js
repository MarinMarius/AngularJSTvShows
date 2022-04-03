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
                console.info("in handle close");
                $ctrl.modalInstance.close($ctrl.modalData);
            };
            $ctrl.handleDismiss = function () {
                console.info("in handle dismiss");
                $ctrl.modalInstance.dismiss("cancel");
            };
        }]
    });