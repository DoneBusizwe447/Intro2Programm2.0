// document.getElementById("myName").innerHTML = "Busy"

let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
 updateList();
}

function updateList() {
    document.getElementById("firstthing").innerHTML = item1;
    document.getElementById("secondthing").innerHTML = item2;
    document.getElementById("thirdthing").innerHTML = item3;
}