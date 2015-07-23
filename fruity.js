$(document).ready(function() {
	var fruitImages = ['https://upload.wikimedia.org/wikipedia/commons/d/dc/Orange-fruit.png',
	'https://cdn0.iconfinder.com/data/icons/fruits/512/Banana.png',
	'http://pngimg.com/upload/kiwi_PNG4035.png',
	'http://galerey-room.ru/images/201223_1383930743.png',
	'http://2.bp.blogspot.com/-7zl-8m8ksDY/UgCooHEW8dI/AAAAAAAAANs/2FxX3n5ai08/s1600/Strawberry.png',
	'http://www.dhasmartbar.com/img_slider/slider4/blueberries_stack.png',
	'http://bellvalefarms.net/images/slider/peach.png'
	];
	var fruitColors = ['#FFCC66', '#66FF33', '#FFFF66', '#FF9999'];
	var fruitWords = ['apple', 'orange', 'kiwi', 'mango', 'grape', 'pineapple', 'watermelon', 'papaya', 'peach', 'cantaloupe', 'banana', 'cherries'];

	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		var h = images[i].style.height;
		var w = images[i].style.width;
		console.log(h)
		console.log(w)
		images[i].style.maxHeight = h;
		images[i].style.maxWidth = w;
		images[i].src = fruitImages[Math.floor(Math.random()*fruitImages.length)];
	};

	
	var children = document.body.childNodes;
	var ind = 0;
	children = Array.prototype.slice.call(children);
	while (ind < children.length) {

		if (children[ind].nodeType == 3) {
			contentList = children[ind].textContent.split(' ');
			for (var i = 0; i < contentList.length; i++) {
				contentList2 =  contentList[i].split('\n');
				for (var j = 0; j < contentList2.length; j++) {
					if (contentList2[j].match(/^[-a-zA-Z0-9\.,;:'!]+$/) && Math.floor((Math.random() * 5) + 1) < 4) {
						contentList2[j] = fruitWords[Math.floor(Math.random()*fruitWords.length)]
					}
				}
				contentList[i] = contentList2.join('\n')
				console.log(contentList)
				
			}
			children[ind].textContent = contentList.join(' ');
			//children[ind].textContent = children[ind].textContent.replace(/ the | a | I | and /ig, ' ' + fruitWords[Math.floor(Math.random()*fruitWords.length)] + ' ')
		} else {
			var nextChildren = children[ind].childNodes;
			nextChildren = Array.prototype.slice.call(nextChildren);
			if (nextChildren.length > 0) {
				for (var i = 0; i < nextChildren.length; i++) {
					children.push(nextChildren[i]);
				}
			}
		}
		ind++;
	}
	var allElements = document.getElementsByTagName("div");
	//console.log(allElements)
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].style.color != 'ads') {
			//console.log(allElements[i])
			//console.log(allElements[i].style.backgroundColor)
			allElements[i].style.color = fruitColors[Math.floor(Math.random()*fruitColors.length)];
		}
	}
	
	// document.body.innerHTML = document.body.innerHTML.replace(/ the /ig, ' apple ');
	// document.body.innerHTML = document.body.innerHTML.replace(/ a /ig, ' orange ');
	// document.body.innerHTML = document.body.innerHTML.replace(/ I /ig, ' kiwi ');
	// document.body.innerHTML = document.body.innerHTML.replace(/ and /ig, ' mango ');

	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].href = 'https://en.wikipedia.org/wiki/Fruit';
	};



})