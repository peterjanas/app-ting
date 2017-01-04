function tekst() {
	document.getElementById("resultat").innerHTML="<img src='kappachino.jpg'>";
	
}

function variabler(){
	var vaerdi1= "hej";
	var vaerdi2= "verden";
	var resultat= vaerdi1+" "+ vaerdi2;
	document.getElementById("streng").innerHTML=resultat;
	
	vaerdi1 ="4";
	vaerdi2 ="3";
	resultat = vaerdi1+vaerdi2;
	document.getElementById("streng2").innerHTML=resultat;
	
	vaerdi1 =4;
	vaerdi2 =3;
	resultat = vaerdi1+vaerdi2;
	document.getElementById("tal").innerHTML=resultat;
	
}
function sigHeil(){
	var fornavn= document.test.fornavn.value;
	var efternavn=document.test.efternavn.value;
	document.test.kommentar.value="heil "+fornavn+" "+efternavn;
	document.getElementById("kommentar2").innerHTML="Hej "+fornavn+" "+efternavn; 
}
function SletTekst(){
	document.test.fornavn.value="";
	document.test.efternavn.value="";
	document.test.kommentar.value="";
}
function Sum1 () {
	tal1=parseFloat(document.test.tal1.value);
	tal2=parseFloat(document.test.tal2.value);
	var resultat=tal1+tal2;
	document.test.kommentar.value=resultat
}

var tal1;
var tal2;
function konverter (){
	tal1= parseFloat(document.test.tal1.value);
	tal2= parseFloat(document.test.tal2.value);
}

function sum2(){
konverter();
var resultat =tal1+tal2
document.test.kommentar.value=resultat;
}
function sum3(){
konverter();
var resultat =tal1-tal2
document.test.kommentar.value=resultat;
}
function sum4(){
konverter();
var resultat =tal1*tal2
document.test.kommentar.value=resultat;
}
function sum5(){
konverter();
var resultat =tal1/tal2
document.test.kommentar.value=resultat;
}

var h;
var b;
var l;
function konverter1 (){
	h=parseFloat(document.test.h.value);
	b=parseFloat(document.test.b.value);
	l=parseFloat(document.test.l.value);
	
}
function sum6(){
konverter1()
var resultat = (2*b*h)+(2*l*b)+(2*l*h)
document.test.kommentar.value=resultat;
}
function sum7 (){
konverter1 ();
var resultat = l*b*h
document.test.kommentar2.value=resultat;
}


function taelop(){
	var i=0;
	while (i<4){
		document.getElementById("ud").innerHTML += i+"<br/>";
		i++;
	}
}
function taelop1(){
	var i=0;
	var f=4;
	var m=2;
	while (i<=10){
		m=f*i;
		document.getElementById("ud").innerHTML += m+"<br/>";
		i=i+1;
	}
}
function taelop2(){
	var i=0;
	var f=2;
	var m=2;
	for(var i=0;i<=10;i++){
	m=f*i;
		document.getElementById("ud").innerHTML += m+"<br/>";
	}
	
}







