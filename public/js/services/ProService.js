// public/js/services/ProService.js
angular.module('ProService', []).factory('Pro', ['$http', function($http) {

    return {
        // call to get all pros
        get : function() {
            return $http.get('/api/pros');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/pros', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/pros/' + id);
        }
    }       

}]);
