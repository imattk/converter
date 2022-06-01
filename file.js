
let num1 = document.getElementById("num1");


let mass = document.getElementById("mass");



function addNum(){
    var userNum = document.getElementById("number").value;
    num1.textContent = userNum;
    convLength();
    conVolume();
    conMass();
}
function convLength(){
        var userNum = document.getElementById("number").value;
        var length = document.getElementById("length");

        let meters = (userNum * 0.3048).toFixed(3);
        let feet = (userNum * 3.2808399).toFixed(3);

        length.textContent = userNum + " meters = " + feet + "feet | " + userNum + " feet = " + meters + " meters";
        
}
function conVolume(){
    var userNum = document.getElementById("number").value;
    let volume = document.getElementById("volume");

    let gallons = (userNum * 0.26417205).toFixed(3);
    let liters = (userNum * 3.78541178).toFixed(3);

    volume.textContent = userNum + " liters = " + gallons + "gallons | " + userNum + " gallons = " + liters + " liters"; 

}
function conMass(){
    var userNum = document.getElementById("number").value;
    let mass = document.getElementById("mass");

    let kilos = (userNum * 0.45359237).toFixed(3);
    let pounds = (userNum * 2.20462262).toFixed(3);

    mass.textContent = userNum + " kilos = " + pounds + "pounds | " + userNum + " pounds = " + kilos + " kilos";
}