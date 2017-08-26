var photos = [
	"https://radiofelicidad.mx/wp-content/uploads/2016/12/Disfrute-una-tasita-de-cafe%CC%819-consejos-para-evitar-que-tu-hijo-se-involucre-en-el-Halloween-2.jpg",
	"http://images.all-free-download.com/images/graphicthumb/elements_of_different_cafe_deisgn_vector_522728.jpg"
]
var index = 0;

function cambia() {
	if (index) {
		index--;
	}else {
		index++;
	}
	document.getElementById('photos').src = photos[index];
	
}

function shy() {
	document.getElementById('shy').style.visibility = "hidden";
}