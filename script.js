$(document).ready(function(){

    /*
    $.ajax({

            url: "https://rickandmortyapi.com/api/character",
            method: "GET",
            dataType : "json",

    })

    .done(function(response){
        let data = JSON.stringify(response);
        console.log(data)
        $("div#rick").append(data[0].name);
    })
    .fail(function(error){
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    .always(function(){
        alert("Requête effectuée");
    });

    */

    

    $.get("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]", function(object){
        console.log(object);
        object.forEach(function(item){
            $("<article class='rick'>\
                <img src='' alt=''>\
                <div class='col'>\
                <h2> Nom = "+ item.name +" </h2>\
                <p> Espèce = " + item.species +"</p>\
                <p> Genre = " + item.gender +"</p>\
                <p> Planète d'origine = " + item.origin.name +"</p>\
                </div>\
            ").appendTo(".append");
            $("article img").attr('src', item.image);

        })

    });

});


//        console.log(response[0].name);
