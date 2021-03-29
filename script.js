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


    //AJOUT D'IMAGE DANS LA GALERIE
    $(".addImage").click(function(){
        $("<article>\
        <form>\
        <h3>Ajoutez votre image ! </h3>\
        <label for='url'>Tapez l'URL de l'image: </label>\
        <input type='text' name='url' placeholder='URL' class='imageUrl'>\
        <button type='button' class='addImage'>Publier</button>\
        </form>\
        </article>\
        ").insertBefore(('.imageGallery'));

        $(".addImage").click(function(){
            let url= $('.imageUrl').val()
            console.log(url);
            $("<img src='"+ url +"' class='gallery'>").appendTo((".imageGallery"));
        })
    })


    // PLACEMENT D'IMAGE EN MOSAIQUE OU COLONNE

    $(".mosaic").click(function(){
        $('.imageGallery').css('flex-direction', 'row')
        $('.gallery').css({ 'width':'450px', 'height':'300px'})
    })
    $(".column").click(function(){
        $('.imageGallery').css('flex-direction', 'column')
        $('.gallery').css({'width':'100%', 'height':'auto'})

    })


   



});

