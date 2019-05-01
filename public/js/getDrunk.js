$(document).ready(function () {
     API.getDrink().then(function (drinks) {
        console.log(drinks);
        
    });
});


