angular.module('core.client').service('ClientFactory', [
    '$http',
    function($http) {

        var urlBase = 'http://localhost/nightlife/markw/data/json_response.php';
        var config = {
            // params: {
            //     item: 'this string'
            // },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        this.getClients = function(newUser) {
            return $http.post(urlBase, newUser, config);
        }

    }
]);
