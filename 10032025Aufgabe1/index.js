let itemList = [];
let input;

function addListItem() {
    input = document.getElementById("listItem").value; //Eingaben aus der Textbox in eine Variable laden
    itemList = input.split(","); //Eingaben in ein Array laden
    console.log(itemList);
    document.getElementById("listItem").value = ""; //Textbox leeren
}

function outputList() {
    let output = "";
    for (let i = 0; i < itemList.length; i++) {
        output += `<li>${itemList[i]}</li>`;
    }
    document.getElementById("output").innerHTML = output;
}