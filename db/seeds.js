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
db.sequelize.sync({force: true}).then(function () {
    createSeeds(categorySeeds, db.Category);
});