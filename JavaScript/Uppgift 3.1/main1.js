var daysOfWeek = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];
var d = new Date();
var n = d.toDateString();
var x1 = "999";
var x2 = "999 888";
var name = "Olivia";
var glo = "GLOBAL"

function weekArray() {
document.getElementById("week").innerHTML = daysOfWeek;  
}
weekArray();
 

function day() {
    document.getElementById("date").innerHTML = n;
}

day();

function torf() {
        document.getElementById("stuff").innerHTML = Boolean (5 < 4);
}
function calculate() {
    p = Math.pow(7, 2);
    rut = Math.sqrt(p);
    document.getElementById("cal").innerHTML =  Math.round(rut);

}
function numbers() {
    var no = Number(x1) + "<br>" + Number(x2); 
    document.getElementById("num").innerHTML = no;
}

function stringex() {
    document.getElementById("name").innerHTML = "Jag heter " + name.toString();
}

function regEx() {
    var str = document.getElementById("reg").innerHTML; 
    var txt = str.replace(/sämst/i, "bäst");
    document.getElementById("reg").innerHTML = txt;
}
function myglobal() {
    document.getElementById("global").innerHTML =
    "Med " + glo + " kan objekt skapas utanför funktionen";
}
myglobal();