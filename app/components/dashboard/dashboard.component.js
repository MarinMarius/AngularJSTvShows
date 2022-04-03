angular.
    module('tvShowsApp').
    component('appDashboard', {
        templateUrl: 'components/dashboard/dashboard.template.html',
        bindings: {
            key: '<'
        },
        controller: function DashboardController($http, $uibModal) {
            var ctrl = this;
            // this.$onInit = function () {
            //     if (!this.key) {
            //         this.key = '';
            //     }
            //     this.getData();
            // }


            this.$onChanges = function (obj) {
                this.getData();
            }

            this.getData = () => {
                $http({
                    method: 'GET',
                    url: `https://api.tvmaze.com/search/shows?q=${this.key}`
                }).then(function successCallback(response) {
                    this.shows = response.data; //.slice(0, 4);
                    this.shows.forEach(show => {
                        if (show.show.summary) {
                            show.show.summary = show.show.summary.replace('<p>', '');
                            show.show.summary = show.show.summary.replace('</p>', '');
                            show.show.summaryOverview = `${show.show.summary.substring(0, 150)} ..`;
                        } else {
                            show.show.summaryOverview = 'No summuary info';
                        }

                    });
                    this.dramaShows = this.shows.filter(s => s.show?.genres?.some(g => g === 'Drama'))?.slice(0, 4);
                    this.comedyShows = this.shows.filter(s => s.show?.genres?.some(g => g === 'Comedy'))?.slice(0, 4);
                    this.sportShows = this.shows.filter(s => s.show?.genres?.some(g => g === 'Sports'))?.slice(0, 4);

                }.bind(this),
                    function errorCallback(response) { }.bind(this));
            }

            this.openModal = function (data) {

                $uibModal.open({
                    component: "myModal",
                    resolve: {
                        modalData: function () {
                            return data;
                        }
                    }
                }).result.then(function (result) {
                    console.info("I was closed, so do what I need to do myContent's  controller now.  Result was->");
                    console.info(result);
                }, function (reason) {
                    console.info("I was dimissed, so do what I need to do myContent's controller now.  Reason was->" + reason);
                });
            };
        }
    });