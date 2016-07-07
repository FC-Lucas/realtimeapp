(function () {
    'use strict';
    angular.module('realtimeapp').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS'];

    function LoginCtrl($scope, $rootScope, $location, APP_SETTINGS) {
      var vm = this;
      var ref = new Firebase(APP_SETTINGS.FIREBASE_URL);

      vm.facebookLogin = doFacebookLogin;
      vm.logout = logout;
      vm.navigate = navigate;


      function doFacebookLogin(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Falha no login!!", error);
                }else{
                    $rootScope.user = {
                        name: authData.facebook.displayName,
                        email: authData.facebook.email,
                        image: authData.facebook.profileImageURL
                    };
                    $location.path('/');
                    $scope.$apply();
                }
            }, {
                scope: "email"
            });
      }

      function logout() {
            ref.unauth();
            $rootScope.user = null;
            $location.path('/login');
        }

      function navigate(path) {
            $location.path(path + '/');
      }
    }
})();
