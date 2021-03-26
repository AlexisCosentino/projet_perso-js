$(document).ready(function () {

    a = Array.from({ length: 19 }, () => Math.floor(Math.random() * 600))


    $.get("https://rickandmortyapi.com/api/character/[" + a + "]", function (object) {
        object.forEach(function (item) {
            $("<article class='rick'>\
                <img src='"+ item.image + "' alt=''>\
                <div class='col'>\
                <h2>"+ item.name + "</h2>\
                <p> Espèce = " + item.species + "</p>\
                <p> Genre = " + item.gender + "</p>\
                <p> Planète d'origine = " + item.origin.name + "</p>\
                </div>\
            ").appendTo(".append");
        })

    });

    

    $.get("https://rickandmortyapi.com/api/character/[1,2,3,4,5]", function (object) {
        object.forEach(function (item) {
            $("<article class='rick'>\
                <img src='"+ item.image + "' alt=''>\
                <div class='col'>\
                <h2>"+ item.name + "</h2>\
                <p> Espèce = " + item.species + "</p>\
                <p> Genre = " + item.gender + "</p>\
                <p> Planète d'origine = " + item.origin.name + "</p>\
                </div>\
            ").appendTo(".append");
        })

    });


});


