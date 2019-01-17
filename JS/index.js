/*

Index.js

*/
"use strict"

var komunikat = "Witaj JavaScript";
console.log(komunikat);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>To jest JavaScript</p>";

console.log("Komunikat jest typu : " + typeof(komunikat));
console.log("Div wyniki jest typu : " + typeof(resultsDiv));

var none;
console.log("None jest typu : " + typeof(none));

var numer = 10;
console.log("Numer jest typu : " + typeof(numer));

var prawdaFalsz = true;
console.log("PrawdaFalsz jest typu : " + typeof(prawdaFalsz));

//nowaZmienna = "Test";
console.log("nowaZmienna jest typu : " + typeof(nowaZmienna));

//komunikaty = "Nowa wartosć";

if(!none){
    console.log("None jest niezdefiniowana");
} 

if(numer == "10"){
    console.log("numer jest kompatybilny");
} else if (numer === 10){
    console.log("numer jest identyczny ")
} else {
    console.log("inne");
}


//function wyswietlKomunikat(komunikat){
//    console.log("Komunikat do wyświetlenia : " + komunikat);
//}

function wyswietlKomunikat(komunikat, komunikat2){
    if(komunikat2){
        console.log("Komunikat do wyświetlenia : " + komunikat + komunikat2);
    } else {
        console.log("Komunikat do wyświetlenia : " + komunikat);
    }
   
}

wyswietlKomunikat("tekst informacyjny");
wyswietlKomunikat("tekst informacyjny", "kolejny tekst");

var wyswietlTo = function(komunikat){
    console.log(komunikat);
}

wyswietlTo("Komunikat testowy");

var wyswietlToGdy = function(komunikat, callback){
    wyswietlTo(komunikat);
    callback();
}

wyswietlToGdy("wywolujemy wyswietlToGdy", function () {
    console.log("wywołujemy callback");
});
