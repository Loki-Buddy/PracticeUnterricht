let itemList = [];
let input;
let isEditClicked = false;
let isDelClicked = false;
let editId;
let delId;


function addListItem() {
    if (isEditClicked) {
        let input = document.getElementById("listItem").value;
        itemList[editId] = input;
        outputList();
        isEditClicked = false;
    }else{
        input = document.getElementById("listItem").value; //Eingaben aus der Textbox in eine Variable laden
        itemList = input.split(","); //Eingaben in ein Array laden
        console.log(itemList);
        document.getElementById("listItem").value = ""; //Textbox leeren
    }
  
}

function outputList() {
    
    let output = "";
    for (let i = 0; i < itemList.length; i++) {
        output += 
            `<li id="item${i}">${itemList[i]}
                <button class="ItemButtons" id="edit${i}" onclick="editListItem(edit${i})">
                    <img src="../img/icons8-bearbeiten-20.png">
                </button>
                <button class="ItemButtons" id="del${i}" onclick="delListItem(del${i})">
                    <img src="../img/icons8-entfernen-20.png">
                </button>
            </li>`;
    }
    document.getElementById("output").innerHTML = output;
}

function editListItem(buttonId) {
    isEditClicked = true;
    let bId = buttonId.id;
    let index = bId.slice(4);
    editId = index;
    let input = document.getElementById(`item${index}`).innerText;
    document.getElementById("listItem").value = input;

}

function delListItem(buttonId) {
    isDelClicked = true;
    let bId = buttonId.id;
    let index = bId.slice(3);
    delId = index;
    itemList.splice(index, 1);
    outputList();
}