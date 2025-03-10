let itemList = [];
let input;

function addListItem() {
    input = document.getElementById("listItem").value;
    itemList.push(`<li>${input}</li>`);
    document.getElementById("listItem").value = "";
}

function outputList() {
    let output = "";
    for (let i = 0; i < itemList.length; i++) {
        output += itemList[i];
    }
    document.getElementById("output").innerHTML = output;
}