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

    //DROPDOWN MENU
    $(".dropbtn").click(function () {

        let click = document.getElementById("list-items");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    })


    //FORMULAIRE DYNAMIQUE

    $(".formbtn").click(function(){
        let datas = [$(".firstform").val(), $(".secondform").val(), $(".thirdform").val()]
        console.log(datas[0])
        $("<article class='rick'>\
        <h3>"+ datas[0] +"</h3>\
        <p>" + datas[3] + "</p>\
        <p> Auteur : " + datas[2] + "</p>\
        </article>\
        ").insertAfter(("form"));
    })





});

