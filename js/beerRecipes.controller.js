'use strict'

angular.module('app') 
        .controller('beerRecipeCtrl',beerRecipeCtrl);
        
beerRecipeCtrl.$inject = ['$scope','Notification','BeerRecipes','$stateParams','$state'];

function beerRecipeCtrl($scope,Notification,BeerRecipes,$stateParams,$state){ 
    
    if($stateParams.id != null){
        $scope.recipe = BeerRecipes.getRecipeById($stateParams.id);
    }else{
        $scope.recipe = {};
    }

    $scope.recipes = BeerRecipes.getRecipes();
    $scope.numOfRecipes = $scope.recipes.length;
    $scope.beerStyles = BeerRecipes.getBeerStyles();
    $scope.grains =  BeerRecipes.getIngredientsByType('grain');
    $scope.hops = BeerRecipes.getIngredientsByType('hop');
    $scope.yeasts = BeerRecipes.getIngredientsByType('yeast');
    $scope.extras = BeerRecipes.getIngredientsByType('extra');

    $scope.isViewOnly = function(){
        return $stateParams.id;
    };

    $scope.saveRecipe = function(){
        BeerRecipes.addRecipe($scope.recipe);
        Notification.success('Recipe successfully saved!');
        $state.go('home.recipes');
    };

    $scope.isClearDisabled = function(){
        return $stateParams.id || isObjectEmpty($scope.recipe);
    };

    $scope.isSaveDisabled = function(){
        return $stateParams.id || $scope.recipeForm.$invalid;
    };
    
    $scope.clearRecipe = function(){
        $scope.recipe = {};
    };

    function isObjectEmpty(obj) {
        if (obj) {
            if(Object.keys(obj).length == 1) {
                return obj[Object.keys(obj)[0]] == undefined;
            }
                
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
        }
        return true;
    }
    
}