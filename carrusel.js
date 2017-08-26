var photos = [
	"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tipos_de_azules.png/250px-Tipos_de_azules.png",
	"https://elsignificadode.com/wp-content/uploads/2015/12/Significado-del-color-rojo.jpg",
	"http://significadodeloscolores.info/wp-content/uploads/2014/08/verde.png",
	"/home/diegojmartinez/Pictures/nbm3Hs.gif",
	"http://significadodeloscolores.info/wp-content/uploads/2014/08/color-amarillo.png",
	"https://radiofelicidad.mx/wp-content/uploads/2016/12/Disfrute-una-tasita-de-cafe%CC%819-consejos-para-evitar-que-tu-hijo-se-involucre-en-el-Halloween-2.jpg"
];

var index = 0;

setTimeout(function() {
	adelante();
}, 3000);

function adelante() {
	if ( index < photos.length - 1 ) {
		index++;
	}else {
		index = 0;
	}
	document.getElementById('photos').src = photos[index];
}

function atras() {
	if ( index > 0 ) {
		index--;
	}else {
		index = photos.length-1;
	}
	document.getElementById('photos').src = photos[index];
}