
let NumController = function ($scope) {

  $scope.num = 0;
  $scope.message = 'likes';

  $scope.doSomething = function () {
    $scope.num = $scope.num + 1;
    $scope.message = ($scope.num === 1) ? 'like' : 'likes';
  };


};

NumController.$inject = ['$scope'];

export default NumController;


