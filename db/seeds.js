var db = require("../models");
var categorySeeds = [{
    id: 1,
    name: "Get Drunk"
},{
    id: 2,
    name: "Stay Sober"
}];
function createSeeds(seeds, Model) {
    for(var i = 0; i < seeds.length; i++) {
        Model.create(seeds[i])
            .then(function (dbItem) {
                console.log(dbItem);
            });
    }
}
var drinkSeeds = [{
    
    name: "Tequilla",
    body: "1 shot",
    CategoryId: 1

},{
    name: "Vodka",
    body: "1 shot",
    CategoryId: 2
}
   
];



db.sequelize.sync({force: true}).then(function () {
    createSeeds(categorySeeds, db.Category);
    createSeeds(drinkSeeds, db.Drinks);
});