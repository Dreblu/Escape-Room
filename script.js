// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("money").classList.add("opaque");
	document.getElementById("monopoly").classList.add("opaque"); 
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("").classList.remove("");
	document.getElementById("").classList.remove("");
}

function showTrophy(el){
	document.getElementById("monopoly").src = "images/money.png";
	document.getElementById("money").src = "images/monopoly.jpg";
	document.getElementById("monopoly").src = "images/money.png";
}