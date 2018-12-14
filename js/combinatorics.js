
function factorial(number){  
    var i,fact=1;  
        for(i=1;i<=number;i++){    
        fact=fact*i;    
    }
    return fact;    
}  

function check(operation) {
    if(operation=='comb'){
        document.getElementById("combBtn").disabled = false;
        document.getElementById("permBtn").disabled = true;
    }
    if(operation=='perm'){
        document.getElementById("combBtn").disabled = true;
        document.getElementById("permBtn").disabled = false;
    }
}

function getCombinations(){
    if(r>n||r<=0){
        if(r>n)
            alert ("Sample Points cannot be greater than Points in Set.");
        if(r<=0)
            alert ("Sample Points cannot be 0.");
        document.getElementById("binary").value = "";
        document.getElementById("binary").focus();
        return false;
    }
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    var nMINr=n-r;
    var nFact=factorial(n);
    var rFact=factorial(r);
    var nMINrFact=factorial(nMINr);
    var divsior=rFact*nMINrFact;
    var comb= nFact/divsior;
    var fig = "Number of possible combinations: " +  " = " + comb+ "<br>";
    document.getElementById("result").innerHTML = fig;
}


function getPermutations(){
    var n = document.getElementById("n").value;
    var r = document.getElementById("r").value;
    var nMINr=n-r;
    var nFact=factorial(n);
    var nMINrFact=factorial(nMINr);
    var perm= nFact/nMINrFact;
    var fig = "Number of possible Permuations: " +  " = " + perm+ "<br>";
    document.getElementById("result").innerHTML = fig;
}