'use strict'

angular.module('app',
                [
                    'ui-notification',
                    'ngSanitize', 
                    'ui.select',
                    'ui.router'
                ]
).config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/recipes")
      
      $stateProvider
        .state('home', {
            url:'',
            abstract:true,
            views:{
                nav:{
                    templateUrl: "pages/navBar.template.html",
                    controller: "navBarCtrl"
                },
                '':{
                    template: "<ui-view></ui-view>",
                    controller: "beerRecipeCtrl"
                }
            }
        }) 
        .state('home.recipes', {
            url: "/recipes",
            templateUrl: "pages/recipes.html",
            controller: "beerRecipeCtrl"
        })        
        .state('home.newRecipe', {
            url: "/newRecipe",
            templateUrl: "pages/recipe.template.html",
            controller: "beerRecipeCtrl"  
        })
        .state('home.recipe', {
            url: "/recipe/:id",
            templateUrl: "pages/recipe.template.html",
            controller: "beerRecipeCtrl"
        }) 
});
        
