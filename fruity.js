$(document).ready(function() {
	var fruitImages = ['https://upload.wikimedia.org/wikipedia/commons/d/dc/Orange-fruit.png',
	'https://cdn0.iconfinder.com/data/icons/fruits/512/Banana.png',
	'http://pngimg.com/upload/kiwi_PNG4035.png',
	'http://galerey-room.ru/images/201223_1383930743.png',
	'http://2.bp.blogspot.com/-7zl-8m8ksDY/UgCooHEW8dI/AAAAAAAAANs/2FxX3n5ai08/s1600/Strawberry.png',
	'http://www.dhasmartbar.com/img_slider/slider4/blueberries_stack.png',
	'http://bellvalefarms.net/images/slider/peach.png'
	]
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].src = fruitImages[Math.floor(Math.random()*fruitImages.length)];
	}

	console.log(document.body.textContent);
})