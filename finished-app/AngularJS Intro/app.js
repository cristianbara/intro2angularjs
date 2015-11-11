var model = [
    {
        text:'make presentation',
        done: true        
    },
     {
        text:'finish app',
        done: false
    },
    
];
angular.module('myToDoApp', [])
    .controller('myToDoAppController', function($scope) {
    // controller code goes here
    
    $scope.model = model;
    
    $scope.markAsDone = function(index) {
        $scope.model[index].done = true;
    }
    
    $scope.removeToDo = function(index) {
        $scope.model.splice(index, 1);
    }
    $scope.addToDo = function() {
        var newItem = {
            text: ' ',
            done: false
        }
        $scope.model.push(newItem);
    }
});