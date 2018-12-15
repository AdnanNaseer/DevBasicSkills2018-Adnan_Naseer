function printAndTable(){
    var table = document.getElementById("andTable");
    for(var i=0;i<4;i++){
        var row = table.insertRow(-1);
        var a = row.insertCell(0);
        var b = row.insertCell(1);
		var aAndb = row.insertCell(2);
		var ans;
		switch(i){
			case 0:
				a.innerHTML = "<strong>"+true+"</strong>";
				b.innerHTML = "<strong>"+false+"</strong>";
				ans=true&&false;
				aAndb.innerHTML = "<strong>"+ ans +"</strong>";
				break;
			case 1:
				a.innerHTML = "<strong>"+false+"</strong>";
				b.innerHTML = "<strong>"+true+"</strong>";
				ans=false&&true;
				aAndb.innerHTML = "<strong>"+ans+"</strong>";
				break;
			case 2:
				a.innerHTML = "<strong>"+false+"</strong>";
				b.innerHTML = "<strong>"+false+"</strong>";
				ans=false&&false;
				aAndb.innerHTML = "<strong>"+ans+"</strong>";
				break;
			case 3:
				a.innerHTML = "<strong>"+true+"</strong>";
				b.innerHTML = "<strong>"+true+"</strong>";
				ans=true&&true;
				aAndb.innerHTML = "<strong>"+ans+"</strong>";			
				break;
		}
    }
}

function printOrTable(){
    var table = document.getElementById("orTable");
    for(var i=0;i<4;i++){
        var row = table.insertRow(-1);
        var a = row.insertCell(0);
        var b = row.insertCell(1);
		var aOrb = row.insertCell(2);
		
		switch(i){
			case 0:
				a.innerHTML = "<strong>"+true+"</strong>";
				b.innerHTML = "<strong>"+false+"</strong>";
				aOrb.innerHTML = "<strong>"+true||false+"</strong>";
				break;
			case 1:
				a.innerHTML = "<strong>"+false+"</strong>";
				b.innerHTML = "<strong>"+true+"</strong>";
				aOrb.innerHTML = "<strong>"+false||true+"</strong>";
				break;
			case 2:
				a.innerHTML = "<strong>"+false+"</strong>";
				b.innerHTML = "<strong>"+false+"</strong>";
				aOrb.innerHTML = "<strong>"+false||false+"</strong>";
				break;
			case 3:
				a.innerHTML = "<strong>"+true+"</strong>";
				b.innerHTML = "<strong>"+true+"</strong>";
				aOrb.innerHTML = "<strong>"+true||true+"</strong>";		
				break;
		}
    }
}


function printNotTable(){
    var table = document.getElementById("notTable");
    for(var i=0;i<2;i++){
        var row = table.insertRow(-1);
        var a = row.insertCell(0);
        var b = row.insertCell(1);
		
		switch(i){
			case 0:
				a.innerHTML = "<strong>"+true+"</strong>";
				b.innerHTML = "<strong>"+!true+"</strong>";
				break;
			case 1:
				a.innerHTML = "<strong>"+false+"</strong>";
				b.innerHTML = "<strong>"+!false+"</strong>";
				break;
		}
    }
}