angular.
    module('tvShowsApp').
    component('appMovieList', {
        templateUrl: 'components/movie-list/movie-list.template.html',
        bindings: {
            inData: '<',
            type: '<'
        },
        controller: function MobieListController($uibModal) {
            var $ctrl = this;

            $ctrl.$onInit = () => {
                $ctrl.shows = $ctrl.inData;
            }

            $ctrl.$onChanges = function (obj) {
                $ctrl.shows = obj.inData.currentValue;
            }
            
            this.openModal = function (data) {
                $uibModal.open({
                    component: "movieDetail",
                    resolve: {
                        modalData: function () {
                            return data;
                        }
                    }
                })
                .result.then(function (result) {
                }, function (reason) {
                });
            };
        }
    });