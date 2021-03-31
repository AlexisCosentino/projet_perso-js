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

    $(".formbtn").click(function () {
        let datas = [$(".firstform").val(), $(".secondform").val(), $(".thirdform").val()]
        $("<article class='rick'>\
        <img class='control delete' src='img/delete.svg'>\
        <h3>"+ datas[0] + "</h3>\
        <p>" + datas[1] + "</p>\
        <p> Auteur : " + datas[2] + "</p>\
        </article>\
        ").insertAfter((".form-article"));

        //SUPPRIMER UN ARTICLE QUI A ETE AJOUTE

        $('.delete').click(function () {
            $(this).parent('article').remove();
        })
    })


    //AJOUT D'IMAGE DANS LA GALERIE
    $(".addImage").click(function () {
        $("<article>\
        <form>\
        <h3>Ajoutez votre image ! </h3>\
        <label for='url'>Tapez l'URL de l'image: </label>\
        <input type='text' name='url' placeholder='URL' class='imageUrl'>\
        <button type='button' class='addImage'>Publier</button>\
        </form>\
        </article>\
        ").insertBefore(('.imageGallery'));

        $(".addImage").click(function () {
            let url = $('.imageUrl').val()
            $("<div class='deletePosition'>\
            <img class='control delete' src='img/delete.svg'>\
            <img src='"+ url + "' class='gallery'>\
            </div>\
            ").appendTo((".imageGallery"));


            //SUPPRIMER UNE PHOTO QUI A ETE AJOUTE

            $(".delete").click(function () {
                $(this).parent('div').remove();
            })
        })

    })


    // PLACEMENT D'IMAGE EN MOSAIQUE OU COLONNE

    $(".mosaic").click(function () {
        $('.imageGallery').css('flex-direction', 'row')
        $('.gallery').css({ 'width': '450px', 'height': '300px' })
    })
    $(".column").click(function () {
        $('.imageGallery').css('flex-direction', 'column')
        $('.gallery').css({ 'width': '100%', 'height': 'auto' })
    })



    //LE JEU DU SHIFOURICK !!!!


    let playerScore = 0;
    let computerScore = 0;

    $(".playerScore").text(playerScore);
    $(".computerScore").text(computerScore);

    function getComputerChoice() {
        let input = ['rick', 'dog', 'cornichon'];
        let choice = input[Math.floor(Math.random() * 3)]
        return choice
    }

    /*
    function findWinner(player, computer){
        if (player == 'rick' && computer == 'cornichon' || player == 'cornichon' && computer == 'dog' || player == 'dog' && computer == 'rick'){
            $(".answer").text('Tu as gagné mon gars !');
            $('.gif').attr('src', 'img/win.gif')
            playerScore++
            $(".playerScore").text(playerScore);
        }
        else if (player === computer){
            $(".answer").text("Merde c'est égalité..");
            $('.gif').attr('src', 'img/tied.gif')
        } else {
            $(".anwser").text("Putain comme t'es nul Morty, tu as perdu !");
            $('.gif').attr('src', 'img/lose.gif')
            computerScore++;
            $(".computerScore").text(computerScore);

        }
    }

    */
    function findWinner(player, computer) {
        if (player == computer) {
            $(".answer").text("Merde c'est égalité..");
            $('.gif').attr('src', 'img/tied.gif')
        } else {
            if (player == 'rick') {
                if (computer == 'cornichon') {
                    $(".answer").text('Tu as gagné mon gars !');
                    $('.gif').attr('src', 'img/win.gif')
                    playerScore++
                    $(".playerScore").text(playerScore);
                } else {
                    $(".answer").text("Putain comme t'es nul Morty, tu as perdu !");
                    $('.gif').attr('src', 'img/lose.gif')
                    computerScore++;
                    $(".computerScore").text(computerScore);
                }
            } else if (player == 'cornichon') {
                if (computer == 'dog') {
                    $(".answer").text('Tu as gagné mon gars !');
                    $('.gif').attr('src', 'img/win.gif')
                    playerScore++
                    $(".playerScore").text(playerScore);
                } else {
                    $(".answer").text("Putain comme t'es nul Morty, tu as perdu !");
                    $('.gif').attr('src', 'img/lose.gif')
                    computerScore++;
                    $(".computerScore").text(computerScore);
                }
            } else if (player == 'dog') {
                if (computer == 'rick') {
                    $(".answer").text('Tu as gagné mon gars !');
                    $('.gif').attr('src', 'img/win.gif')
                    playerScore++
                    $(".playerScore").text(playerScore);
                } else {
                    $(".answer").text("Putain comme t'es nul Morty, tu as perdu !");
                    $('.gif').attr('src', 'img/lose.gif')
                    computerScore++;
                    $(".computerScore").text(computerScore);
                }
            }
        }
    }



    $('.gameItem').click(function () {
        let playerChoice = $(this).attr('alt');
        let computerChoice = getComputerChoice()
        console.log(playerChoice)
        console.log(computerChoice)
        $(".yourPlay").text("Vous avez joué " + playerChoice + " et le aliens ont joué " + computerChoice + " !")
        findWinner(playerChoice, computerChoice)
    })

    //FIN DU JEU CHIFOURICK///////




    // JEU MEMORICK



    let cards = new Array()

    $.getJSON("https://api.mocki.io/v1/995e2191", function (response) {
        response.forEach(function (item) {
            cards.push(item.img);
        })

        let shuffled1 = shuffle(cards)



        shuffled1.forEach(function (item) {
            $("<div class='frontface' style='background-image:url(" + item + ")'>\
            <div class='backface'>\
            </div></div>").appendTo($(".memorick"));
        })

        let chosenCard = []
        let cardsRemain = shuffled1.length


        $(".frontface").click(function () {
            $(this).children().css('opacity', '0')              //Montre l'image choisi
            value = $(this).css('background-image')             //Récupère l'url de l'image pour la comparer ensuite
            chosenCard.push(value)                              //Envoi la valeur de l'url dans le tableau
            $(this).addClass('found');                          //J'ajoute une classe pour le selectioner
            if (chosenCard.length == 2) {                       //Le tableau st initialisé à zéro et tant qu'il y a pas 2 cartes,
                if (chosenCard[0] == chosenCard[1]) {           //Si les 2 valeurs correspondent
                    $(".found").children().remove()             //Je supprime la div avec le background noir
                    cardsRemain -= 2                            //J'enlève les 2 cartes qui viennent d'être trouvé au compteur de carte restante
                } else {
                    $(".found").removeClass('found')                //Je supprime la classe found car non trouvé

                    setTimeout(function () {
                        $(".backface").css('opacity', '1')
                    }, 800)                                     //Si le cartes ne correspondent pas, les images se recachent avec un petit délais.
                }
                chosenCard = []
            }
            console.log(cardsRemain)
            
        if (cardsRemain == 0){
            $("<h1 class='text-center'>Putain Morty tu as gagné !</h1><form><button type='submit' class='text-center'>REPLAY</button></form>").appendTo($(".winMessage"))
        }

        })




    });

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

});

