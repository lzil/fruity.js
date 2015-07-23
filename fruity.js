$(document).ready(function() {
	var fruitColors = ['#FFCC66', '#66FF33', '#FFFF66', '#FF9999'];
	var fruitWords = ['apple', 'orange', 'kiwi', 'mango', 'grape', 'pineapple', 'watermelon', 'papaya', 'peach', 'cantaloupe', 'banana', 'cherries', 'plum', 'figs', 'pear', 'grapefruit', 'limes', 'lemon', 'lychee', 'blueberries', 'apricot', 'raspberry', 'persimmon', 'strawberry', 'kumquat', 'blackberry', 'tangerine', 'passionfruit', 'avocado'];

	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].style.webkitFilter = "grayscale(.4) sepia(.2) saturate(3) brightness(1.5) contrast(1.2)";
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
					if (contentList2[j].match(/^[-a-zA-Z0-9\.,;:'?!]+$/) && Math.floor((Math.random() * 5) + 1) < 3) {
						firstP = 0;
						lastP = 0;
						if (contentList2[j].charAt(0).toUpperCase() === contentList2[j].charAt(0) && contentList2[j].length > 1) {
							firstP = 1;
						}
						if (contentList2[j].slice(-1).match(/^[\.,;:'?!]$/) && contentList2[j].length > 1) {
							lastP = contentList2[j].slice(-1);
						}
						contentList2[j] = fruitWords[Math.floor(Math.random()*fruitWords.length)]
						if (firstP != 0) {
							contentList2[j] = contentList2[j].charAt(0).toUpperCase() + contentList2[j].slice(1);
						}
						if (lastP != 0) {
							contentList2[j] += lastP;
						}
					}
				}
				contentList[i] = contentList2.join('\n')				
			}
			children[ind].textContent = contentList.join(' ');
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
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].href = 'https://en.wikipedia.org/wiki/Fruit';
	};



})