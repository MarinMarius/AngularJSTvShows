angular.
    module('tvShowsApp').
    component('appDashboard', {
        templateUrl: 'components/dashboard/dashboard.template.html',
        bindings: {
            key: '<'
        },
        controller: function DashboardController($http) {
            var $ctrl = this;

            $ctrl.$onChanges = function (obj) {
                $ctrl.getData();
            }

            $ctrl.getData = () => {
                $http({
                    method: 'GET',
                    url: `https://api.tvmaze.com/search/shows?q=${this.key}`
                }).then(function successCallback(response) {
                    $ctrl.shows = response.data;
                    $ctrl.shows.forEach(show => {
                        if (show.show.summary) {
                            show.show.summaryOverview = `${show.show.summary.substring(0, 150)} ..`;
                        } else {
                            show.show.summaryOverview = 'No summuary info';
                        }
                    });
                    $ctrl.dramaShows = $ctrl.shows.filter(s => s.show?.genres?.some(g => g === 'Drama'))?.slice(0, 4);
                    $ctrl.comedyShows = $ctrl.shows.filter(s => s.show?.genres?.some(g => g === 'Comedy'))?.slice(0, 4);
                    $ctrl.sportShows = $ctrl.shows.filter(s => s.show?.genres?.some(g => g === 'Sports'))?.slice(0, 4);
                },
                    function errorCallback(response) {
                        console.error(response);
                    });
            }
        }
    });