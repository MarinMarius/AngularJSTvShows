angular.
    module('tvShowsApp').
    component('appDashboard', {
        templateUrl: 'components/dashboard/dashboard.template.html',
        controller: function DashboardController($http, $uibModal) {
            $http({
                method: 'GET',
                url: 'https://api.tvmaze.com/search/shows?q=girls'
            }).then(function successCallback(response) {
                this.shows = response.data.slice(0, 4);
                this.shows.forEach(show => {
                    if (show.show.summary) {
                        show.show.summary = show.show.summary.replace('<p>', '');
                        show.show.summary = show.show.summary.replace('</p>', '');
                        show.show.summaryOverview = `${show.show.summary.substring(0, 150)} ..`;
                    } else {
                        show.show.summaryOverview = 'No summuary info';
                    }

                });

            }.bind(this),
                function errorCallback(response) { }.bind(this));

            this.openModal = function (size) {

                $uibModal.open({
                    component: "myModal",
                    resolve: {
                        modalData: function () {
                            return this.shows;
                        }
                    }
                }).result.then(function (result) {
                    console.info("I was closed, so do what I need to do myContent's  controller now.  Result was->");
                    console.info(result);
                }, function (reason) {
                    console.info("I was dimissed, so do what I need to do myContent's controller now.  Reason was->" + reason);
                });
            }.bind(this);
        }
    });