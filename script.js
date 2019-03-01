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
		
		el.src = "Images/3d.jpg";
	
	} else {
		}
}

//Orbital div
function nextImage3(el){
	if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpeg")){
		
		el.src = "Images/3d.jpg";
	
	} else {
		}
}

//Oxygen div
function nextImage4(el){
	if (el.src.match("Images/3d.jpg")){
		
		el.src = "Images/telo.jpg";
		
	} else if (el.src.match("Images/telo.jpg")){
		
		el.src = "Images/orbital.jpeg";
		
	} else if (el.src.match("Images/orbital.jpeg")){
		
		el.src = "Images/oxygen.jpg";
		
	} else if (el.src.match("Images/oxygen.jpeg")){
		
		el.src = "Images/3d.jpg";
	
	} else {
		}
}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
}	