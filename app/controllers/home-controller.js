(function(){
  'use strict';

  angular.module('realtimeapp').controller('HomeCtrl', HomeCtrl);

   HomeCtrl.$inject = ['$scope', 'APP_SETTINGS', '$firebaseArray'];

  function HomeCtrl($scope, APP_SETTINGS, $firebaseArray){
    var url = APP_SETTINGS.FIREBASE_URL + "messages";
    var vm = this;
    var ref = new Firebase(APP_SETTINGS.FIREBASE_URL + '/posts');
    ref.orderByKey().limitToLast(25);

    vm.posts = [];

    activate();

    function activate() {
        vm.posts = $firebaseArray(ref);
    }
  }
})();
