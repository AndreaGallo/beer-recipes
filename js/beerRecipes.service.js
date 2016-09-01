'use strict'

angular.module('app')   
        .factory('BeerRecipes',BeerRecipes);

BeerRecipes.$inject = ['listOfRecipes','$filter','userInfo'];
        
function BeerRecipes(listOfRecipes,$filter,userInfo){
    var recipes = listOfRecipes;
        
    var beerStyles = [
        {id:1, name:'IPA'},
        {id:2, name:'Stout'},
        {id:3, name:'Pilsen'},
        {id:4, name:'Mild'},
        {id:5, name:'Cream Ale'}
    ];

    var beerRecipes = {
        getRecipes: function(){
            return recipes;
        },
        addRecipe: function(recipe){
            var id = recipes.length + 1;
            recipe.id = id;
            recipe.author = userInfo.name;
            recipes.push(recipe);
        },
        getRecipeById: function(id){
            return $filter('filter')(recipes,function(o){ return o.id == id})[0];
        },
        getBeerStyles: function(){
            return beerStyles;
        },
        getIngredientsByType: function(type){
            switch (type) {
                case 'grain':
                    
                    return ['Abbey Malt (BE)','Amber (UK)','Ashbourne Mild (US)',
                            'Brown Malt (UK)','CaraBrown (US)','CaraCrystal Wheat Malt (US)',
                            'Carastan 30L (UK)','Carastan Light 15L (UK)','ESB Malt (CA)'];
            
                case 'hop':
                    
                    return ['Admiral (UK)','Ahtanum (US)','Amarillo (US)',
                            'Apollo (US)','Bramling Cross (UK)','Bravo (US)','Brewers Gold (DE)',
                            'Brewers Gold (US)','Bullion (DE)','Calypso (US)','Cascade (NZ)','Delta (US)',
                            'Taurus (DE)','Vic Secret (AU)','Warrior (US)','Yakima Cluster (US)','Zeus (US)'];

                case 'yeast':
                    
                    return ['Abbaye Fermentis','American Ale Wyeast 1056','Bavarian Wheat Wyeast 3638',
                            'Belgian Abbey II Wyeast 1762','California Ale White Labs WLP001','Czech Pils Wyeast 2279',
                            'European Ale Wyeast 1338','French Saison Wyeast 3711','German Ale Wyeast 1007',
                            'Hefeweizen Ale Yeast White Labs WLP300'];

                case 'extra':
                    
                    return ['Apple Extract','Apricot Extract','Banana Extract','Blackberry Extract','Cherries',
                            'Chocolate (Dark)','Chocolate Extract','Chocolate (Milk)','Cinnamon Sticks',
                            'Coffee (Brewed)','Coffee (Ground)','Grape Extract','Lemon Peel','Orange Juice',
                            'Orange Peel','Vanilla Beans','Vanilla Extract','Whiskey'];
                default:
                    return [];
            }
        }
    };
    
    return beerRecipes;
}