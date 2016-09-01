'use strict'

angular.module('app')
       .value('userInfo',{name:'AndreaGallo',email:'andreita.gallo@gmail.com'})
       .value('listOfRecipes',[{
            id:1,
            name:"Andrea's IPA",
            author:"AndreaGallo",
            style:{id:1,name:"IPA"},
            grains:["CaraCrystal Wheat Malt (US)","CaraBrown (US)"],
            hops: ["Amarillo (US)","Delta (US)","Apollo (US)"],
            yeasts:["American Ale Wyeast 1056"],
            extras:['Apricot Extract'],
            procedure:"Heat 2 Gals to 165, then steep Vienna and Crystals for 30 mins\n\nRemove Grains and add DME and heat to a Boil\n\n5 mins after boil, begin adding Hops add intended intervals\n\nAfter 60 mins, turn off heat and cover, Prepare Ice Bath\n\nI like to have 2 gals of Ice Cold Water from my Freezer ready in the Fermenter, before I add the Wort. Then I throw in some Ice, and a Freezer Pack (after being sanitized) and then fill the Fermenter up with more Ice Cold Water. (I havent invested in any cool toys like Wort Chillers)\n\nBring the temp down to reccommended Levels (Below 80) and pitch Yeast. I didnt use a starter, but i am sure it wouldnt hurt."
        },{
            id:2,
            name:"Bob's Stout",
            author:"BobDylan",
            style:{id:2,name:"Stout"},
            grains:['Abbey Malt (BE)','Amber (UK)'],
            hops: ['Brewers Gold (US)','Bullion (DE)','Calypso (US)'],
            yeasts:['French Saison Wyeast 3711','German Ale Wyeast 1007'],
            extras:['Apple Extract','Apricot Extract'],
            procedure:"Heat 2 Gals to 165, then steep Vienna and Crystals for 30 mins\n\nRemove Grains and add DME and heat to a Boil\n\n5 mins after boil, begin adding Hops add intended intervals\n\nAfter 60 mins, turn off heat and cover, Prepare Ice Bath\n\nI like to have 2 gals of Ice Cold Water from my Freezer ready in the Fermenter, before I add the Wort. Then I throw in some Ice, and a Freezer Pack (after being sanitized) and then fill the Fermenter up with more Ice Cold Water. (I havent invested in any cool toys like Wort Chillers)\n\nBring the temp down to reccommended Levels (Below 80) and pitch Yeast. I didnt use a starter, but i am sure it wouldnt hurt."
        },{
            id:3,
            name:"American Cream Ale",
            author:"JohnSnow",
            style:{id:5,name:"Cream Ale"},
            grains:['Abbey Malt (BE)','ESB Malt (CA)'],
            hops: ['Brewers Gold (US)','Yakima Cluster (US)','Zeus (US)'],
            yeasts:['Bavarian Wheat Wyeast 3638','German Ale Wyeast 1007'],
            extras:['Chocolate Extract'],
            procedure:"Heat 2 Gals to 165, then steep Vienna and Crystals for 30 mins\n\nRemove Grains and add DME and heat to a Boil\n\n5 mins after boil, begin adding Hops add intended intervals\n\nAfter 60 mins, turn off heat and cover, Prepare Ice Bath\n\nI like to have 2 gals of Ice Cold Water from my Freezer ready in the Fermenter, before I add the Wort. Then I throw in some Ice, and a Freezer Pack (after being sanitized) and then fill the Fermenter up with more Ice Cold Water. (I havent invested in any cool toys like Wort Chillers)\n\nBring the temp down to reccommended Levels (Below 80) and pitch Yeast. I didnt use a starter, but i am sure it wouldnt hurt."
        },{
            id:4,
            name:"New Pilsen",
            author:"IvanDavis",
            style:{id:3,name:"Pilsen"},
            grains:['Amber (UK)','ESB Malt (CA)'],
            hops: ['Vic Secret (AU)','Warrior (US)'],
            yeasts:['Belgian Abbey II Wyeast 1762','California Ale White Labs WLP001'],
            extras:['Orange Peel','Vanilla Beans'],
            procedure:"Heat 2 Gals to 165, then steep Vienna and Crystals for 30 mins\n\nRemove Grains and add DME and heat to a Boil\n\n5 mins after boil, begin adding Hops add intended intervals\n\nAfter 60 mins, turn off heat and cover, Prepare Ice Bath\n\nI like to have 2 gals of Ice Cold Water from my Freezer ready in the Fermenter, before I add the Wort. Then I throw in some Ice, and a Freezer Pack (after being sanitized) and then fill the Fermenter up with more Ice Cold Water. (I havent invested in any cool toys like Wort Chillers)\n\nBring the temp down to reccommended Levels (Below 80) and pitch Yeast. I didnt use a starter, but i am sure it wouldnt hurt."
        }]);