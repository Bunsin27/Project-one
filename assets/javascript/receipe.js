// This is the API key. 
var APIKey = "d5194eec5a7983605d72b23429e0724d";
let receipeCount = 10
let APPId = "361b960d"

$(document).ready(function () {
    displayCakes();
    displayPies();
    displayCookies();
});
 // ***********************
 function displayPies(evt) {
    let image;
    var queryURL2 =
        "https://api.edamam.com/search?q=pies&to=" + receipeCount + "&app_id="+ APPId + "&app_key=" + APIKey;

    // create an AJAX call
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        let hits = response.hits;

        // function eachOne(){}
        hits.forEach(element => {
            let imgPath = element.recipe.image
            let labelPath = element.recipe.label
            let sitePath = element.recipe.url
            $("#happier").append(makeCard(sitePath, labelPath, imgPath))
        }); // end forEach
    }); //end ajax call
} // end displayPastry()


// ***********************
function displayCookies(evt) {
    let image;

    var queryURL3 =
        "https://api.edamam.com/search?q=cookies&to=" + receipeCount + "&app_id="+ APPId + "&app_key=" + APIKey;

    // create an AJAX call
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response) {
        let hits = response.hits;

        // function eachOne(){}
        hits.forEach(element => {
            let imgPath = element.recipe.image
            let labelPath = element.recipe.label
            let sitePath = element.recipe.url
            $("#happiest").append(makeCard(sitePath, labelPath, imgPath))
        }); // end forEach
    }); //end ajax call
} // end displayPastry()
// ***********************
function displayCakes(evt) {
    var queryURL1 =
        "https://api.edamam.com/search?q=cupcakes&to=" + receipeCount + "&app_id="+ APPId + "&app_key=" + APIKey;

    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        let hits = response.hits;

        // function eachOne(){}
        hits.forEach(element => {
            let imgPath = element.recipe.image
            let labelPath = element.recipe.label
            let sitePath = element.recipe.url
            $("#happy").append(makeCard(sitePath, labelPath, imgPath))
        }); // end forEach
    }); //end ajax call
} // end displayCakes()

function makeCard(link, label, image) {
    let cardDiv = $('<div>')
    cardDiv.addClass('card')

    let img = $('<img>')
    img.attr('src', image)
    cardDiv.append(img)

    let cardBody = $('<div>')
    cardBody.addClass('card-body')

    let title = $('<p>')
    title.addClass('card-title')
    title.text(label)
    cardBody.append(title)

    let a = $('<a>');
    a.attr('href', link);
    a.attr('target', '_blank')
    a.text('see recipe');
    a.addClass('btn');
    a.addClass('btn-primary');
    cardBody.append(a)
    cardDiv.append(cardBody)
    return cardDiv
}