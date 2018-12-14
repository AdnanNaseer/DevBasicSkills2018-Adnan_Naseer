function dec2All() {
    var a = document.getElementById("decimal").value;
    if ((/[^0-9]/g.test(a)) || a == "") {
        alert ("Please Enter An Integer Number");
        document.getElementById("decimal").value = "";
        document.getElementById("decimal").focus();
        return false;
    }
    a = parseInt(a);
    var fig = "Binary Conversion " +  " = " + binaryValue(a) + "<br>";
    fig = fig + "Hexadecimal Conversion" + " = " + hexadecimalValue(a) + "<br>";
    fig = fig + "Octal Conversion " + " = " + octalValue(a) + "<br>";
    document.getElementById("result_dec_all").innerHTML = fig;
}

//8, 16, 32, 64 bit Binary detection
function bin2All() {
    var a = document.getElementById("binary").value;
    if ((/\b(((?:[10]{2}){32})|((?:[10]{2}){16})|((?:[10]{2}){8})|((?:[10]{2}){4}))\b/g.test(a)) || a == "") {
        alert ("Please Enter A Binary Number");
        document.getElementById("binary").value = "";
        document.getElementById("binary").focus();
        return false;
    }
    a = parseInt(a ,2);
    var fig = "Decimal Conversion " +  " = " + decimalValue(a) + "<br>";
    fig = fig + "Hexadecimal Conversion" + " = " + hexadecimalValue(a) + "<br>";
    fig = fig + "Octal Conversion " + " = " + octalValue(a) + "<br>";
    document.getElementById("result_bin_all").innerHTML = fig;
}

function oct2All() {
    var a = document.getElementById("octal").value;
    if ((/\A0[0-7]*\Z/g.test(a)) || a == "") {
        alert ("Please Enter An Octal Number");
        document.getElementById("octal").value = "";
        document.getElementById("octal").focus();
        return false;
    }
    a = parseInt(a ,8);
    var fig = "Binary Conversion " +  " = " + binaryValue(a) + "<br>";
    fig = fig + "Hexadecimal Conversion" + " = " + hexadecimalValue(a) + "<br>";
    fig = fig + "Decimal Conversion " + " = " + decimalValue(a) + "<br>";
    document.getElementById("result_oct_all").innerHTML = fig;
}

function hexa2All(){
    var a = document.getElementById("hexa").value;
    if ((/\A0[0-7]*\Z/g.test(a)) || a == "") {
        alert ("Please Enter An Hexadecimal Number");
        document.getElementById("hexa").value = "";
        document.getElementById("hexa").focus();
        return false;
    }
    a = parseInt(a ,16);
    var fig = "Binary Conversion " +  " = " + binaryValue(a) + "<br>";
    fig = fig + "Octal Conversion" + " = " + octalValue(a) + "<br>";
    fig = fig + "Decimal Conversion " + " = " + decimalValue(a) + "<br>";
    document.getElementById("result_hexa_all").innerHTML = fig;
}

function hexadecimalValue(decimal){
    var hex_Num = decimal.toString(16).toUpperCase();
    return hex_Num;
}

function decimalValue(decimal){
    var dec_Num = decimal.toString(10);
    return dec_Num;
}

function octalValue(decimal){
    var oct_Num = decimal.toString(8);
    return oct_Num;
}

function binaryValue(decimal){
    var bin_Num = decimal.toString(2);
    return bin_Num;
}


function printNumberSystemChart(range){
    var table = document.getElementById("numberSystemTable");
    for(var i=0;i<=range;i++){
        var row = table.insertRow(-1);
        var dec = row.insertCell(0);
        var bin = row.insertCell(1);
        var oct = row.insertCell(2);
        var hex = row.insertCell(3);
        dec.innerHTML = decimalValue(i);
        bin.innerHTML = binaryValue(i);
        oct.innerHTML = octalValue(i);
        hex.innerHTML = hexadecimalValue(i);    
    }
}

function clearTable(){
    var table = document.getElementById("numberSystemTable");
    table.innerHTML = "";
}