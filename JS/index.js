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