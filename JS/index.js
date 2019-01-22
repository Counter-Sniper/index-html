/*

Index.js

*/
$(document).ready(function () {

    "use strict"

    var resultsList = $("#resultsList");
    resultsList.text("To jest z jQuery");

    var toggleButton = $("#toglleButton");
    toggleButton.on("click", function () {
        resultsList.toggle(500);

        if (toggleButton.text() == "Ukryj")
            toggleButton.text("Pokaż");
        else
            toggleButton.text("Ukryj");
    });

    var listaElementow = $("header nav li");
    listaElementow.css("font-weight", "bold");
    listaElementow.css("font-size", "16px");
    listaElementow.filter(":first").css("font-size", "20px");


    var gitHubWyniki = "https://api.github.com/search/repositories?q=angular+language:javascript&sort=stars";

    $.get(gitHubWyniki, function (wynik) {
        wyswietlanieWynikow(wynik.items);
    });

    function wyswietlanieWynikow(wynik) {
        resultsList.empty();
        $.each(wynik, function (i, element) {

            var newResult = $("<div class='result'>" +
                "<div class='title'>" + element.name + "</div>" +
                "<div class='title'>" + element.full_name + "</div>" +
                "<div class='title'>" + element.description + "</div>" +
                "<div>Język: " + element.language + "</div>" +
                "<div>Wlasciciel: " + element.owner.login + "</div>" +
                "</div>");

            newResult.hover(function () {
                // przyciemniamy
                $(this).css("background-color", "lightgray");
            }, function () {
                // rozjasniamy
                $(this).css("background-color", "transparent");
            });

            resultsList.append(newResult);
        });
    }

});