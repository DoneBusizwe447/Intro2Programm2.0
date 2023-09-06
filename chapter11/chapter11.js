

let people = ["Kareem", "Fatma", "Sumaya", "Mr. Hobson", "Ms. Young", "Bobby"];
let otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

// people = people.concat(otherPeople);
// people = people.indexOf("Ms. Young");
// people = people.join(" # ");
// people = people.lastIndexOf("Bobby");
// people = people.pop();
// people.pop();

// people = people.push("Teddy");
// people.push("Teddy");

// people = people.reverse();
// people.shift();
// people.unshift("Teddy");

// people = people.slice(0,3);
// people = people.sort();
people.splice(1,0,"Cathy");


document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("peopleIKnow").innerHTML = people.toString();

