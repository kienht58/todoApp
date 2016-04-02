angular.module('TodoApp', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.todoData = {};

    // Get all todos
    $http.get('/todos')
        .success(function(data) {
            $scope.todoData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    // Create a new todo
    $scope.createTodo = function(todoID) {
        $http.post('/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todoData = data;
                console.log(data);
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    };

    //Delete todo
    $scope.deleteTodo = function(todoID) {
        $http.delete('/todos/' + todoID)
            .success(function(data) {
                $scope.todoData = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };



});