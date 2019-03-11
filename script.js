//3d div
function nextImage(el){
	if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
			
	} else {
		}
}
//Telescope div
function nextImage2(el){
	if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpeg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/3d.jpg";
	
	} else {
		}
}

//Orbital div
function nextImage3(el){
	if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/3d.jpg";
		
	} else if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/oxygen.jpg";
	
	} else {
		}
}

//Oxygen div
function nextImage4(el){
	if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpg")){
		
		el.src = "Images/orbital.jpeg";
			
	} else {
		}
}

function playsound1(e){
	document.getElementById("jug").play();
	document.getElementById("speed").pause();
	document.getElementById("stamin").pause();
	document.getElementById("double").pause();
}

function playsound2(e){
	document.getElementById("speed").play();
	document.getElementById("jug").pause();
	document.getElementById("stamin").pause();
	document.getElementById("double").pause();
}

function checkConfiguration(el){
	if(a.src.match(Images/3d.jpg") && b.src.match(") && c.src.match("") && d.src.match("Images/orbital.jpeg")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		el.src = "image/money.png";
		console.log("YOU WIN!");
	} else {
		
	}