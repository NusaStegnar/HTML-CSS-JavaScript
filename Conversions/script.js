function temperature(){
    var c = dokument.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrnheit").value = f
}

function weight(){
    var kg = dokument.getElementById("kilograms").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    var km = dokument.getElementById("kilometers").value;
    var m = km * 0.62137
    dokument.getElementById("miles").value = m
}