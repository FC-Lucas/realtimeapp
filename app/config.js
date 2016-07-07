(function () {
    angular.module('realtimeapp').constant('APP_SETTINGS', {
        "FIREBASE_URL": "http://your-app.firebaseio.com"
    });


//Login disable
/*
    angular.module('realtimeapp').run(function ($rootScope, $location) {
        $rootScope.user = null;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                $location.path("/");
            }
        });
      });
*/
})();
