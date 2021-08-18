var time = "Time";
var pets = ["Wiggles", "Bubba", "Binky", "Bolt", "Bella", "Rosie"];
var body = document.body;
var myPets = document.createElement("div");
var petsList = document.createElement("ol");
var pet1 = document.createElement("li");
var pet2 = document.createElement("li");
var pet3 = document.createElement("li");
var pet4 = document.createElement("li");
var pet5 = document.createElement("li");
var pet6 = document.createElement("li");
var pet7 = document.createElement("li");
petsList.textContent = "My pets";
pet1.textContent = "Wiggles";
pet2.textContent = "Bubba";
pet3.textContent = "Binky";
pet4.textContent = "Bolt";
pet5.textContent = "Bella";
pet6.textContent = "Rosie";
pet7.textContent = "Snickers";

body.appendChild(myPets);
myPets.appendChild(petsList);
petsList.appendChild(pet1);
petsList.appendChild(pet2);
petsList.appendChild(pet3);
petsList.appendChild(pet4);
petsList.appendChild(pet5);
petsList.appendChild(pet6);
petsList.appendChild(pet7);


function thisTime(){
    console.log("What " + time + " is it?");
    return;
}
thisTime();
for(var i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}
;
function names(){
    console.log(pets);
}
names();

