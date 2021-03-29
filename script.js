$(document).ready(function () {



    //RECUPERER OBJET API AVEC FONCTION RANDOM POUR OBTENIIR DES ID ENTRE 0 ET 600

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


    //RECUPERER OBJET API EN CHOISISSANT LES IDS QUE JE VEUX

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
        $("<article class='rick'>\
        <img class='control delete' src='img/delete.svg'>\
        <h3>"+ datas[0] +"</h3>\
        <p>" + datas[1] + "</p>\
        <p> Auteur : " + datas[2] + "</p>\
        </article>\
        ").insertAfter((".form-article"));

        //SUPPRIMER UN ARTICLE QUI A ETE AJOUTE

        $('.delete').click(function(){
            $(this).parent('article').remove();
        })
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
            $("<div class='deletePosition'>\
            <img class='control delete' src='img/delete.svg'>\
            <img src='"+ url +"' class='gallery'>\
            </div>\
            ").appendTo((".imageGallery"));


            //SUPPRIMER UNE PHOTO QUI A ETE AJOUTE

            $(".delete").click(function(){
                $(this).parent('div').remove();
            })
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


    //SUPPRIMER UNE IMAGE OU ARTICLE QUI A ETE AJOUTE

   



});

