    //Första bilden visas 
var picnr = 1;
show(picnr);

// Nästa bild visas
function nextpic(n) {
	show(picnr += n);
}

// Föregående bild
function currentSlide(n) {
	show(picnr = n);
}

//Funktionen kolla vilken av bilderna som visas och avgör vilken nästa bild blir beroende på nuvarnade bild. Den aktiva bilden får namnet  "active". När bilden byts, raderas klassnamnet och ersätts till den nya bilden som visas.
function show(n) {
	var i;
	var pic = document.getElementsByClassName("photo");
	if (n > pic.length) {
		picnr = 1
	}
	if (n < 1) {
		picnr = pic.length
	}
	for (i = 0; i < pic.length; i++) {
		pic[i].style.display = "none";
		pic[i].className = pic[i].className.replace("active", "");
	}

	pic[picnr - 1].style.display = "block";

}