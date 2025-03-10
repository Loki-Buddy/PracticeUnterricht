let itemList = [];
let input;

function eingabeInListe() {
    input = document.getElementById("listItem").value; //Eingaben aus der Textbox in eine Variable laden
    itemList = input.split(","); //Eingaben in ein Array laden
    console.log(itemList);
}
function addListItem() {
    eingabeInListe();
    document.getElementById("listItem").value = ""; //Textbox leeren
}

function outputList() {
    let output = "";
    for (let i = 0; i < itemList.length; i++) {
        output += `<li>${itemList[i]}</li>`;
    }
    document.getElementById("output").innerHTML = output;
}