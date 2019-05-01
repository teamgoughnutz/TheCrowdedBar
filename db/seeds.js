var db = require("../models");
var categorySeeds = [{
    id: 1,
    name: "Get Drunk"
},{
    id: 2,
    name: "Stay Sober"
}];

var drinksSeeds = [{
   name: "Tequilla Sunrise",
   body: "1 tequilla. 1 OJ.",
   CategoryId: 1
}];
function createSeeds(seeds, Model) {
    for(var i = 0; i < seeds.length; i++) {
        Model.create(seeds[i])
            .then(function (dbItem) {
                console.log(dbItem);
            });
    }
}
db.sequelize.sync({force: true}).then(function () {
    createSeeds(categorySeeds, db.Category);
    createSeeds(drinksSeeds, db.Drinks);
});