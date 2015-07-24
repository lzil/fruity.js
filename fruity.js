var fruitLog = [102, 114, 117, 105, 116]
var logIndex = 0
document.addEventListener('keypress', function (e) {
	console.log(e.keyCode)
	if (e.keyCode === fruitLog[logIndex]) {
		console.log('GOT ONE')
		logIndex += 1;
		if (logIndex > 4) {
			console.log('GOT IT')
			fruity();
		}
	}
})

var fruity = function(col) {
	//DEFAULTS
	var colorParam = (col / 10.0) || 0;
	var fruitColors = ['#FFDF99', '#BBFF99', '#FFFF66', '#FFAAAA'];
	var fruitColors2 = ['#EEA440', '#40DD20', '#DDDD00', '#DD7777'];
	var fruitWords = ['apple', 'orange', 'kiwi', 'mango', 'grape', 'pineapple', 'watermelon', 'papaya', 'peach', 'cantaloupe', 'banana', 'cherries', 'plum', 'figs', 'pear', 'grapefruit', 'limes', 'lemon', 'lychee', 'blueberries', 'apricot', 'raspberry', 'persimmon', 'strawberry', 'kumquat', 'blackberry', 'tangerine', 'passionfruit', 'avocado'];

	function colorMultiply(color, factor) {
		color = String(color).replace(/[^0-9a-f]/gi, '');
		if (color.length < 6) {
			color = color[0]+color[0]+color[1]+color[1]+color[2]+color[2];
		}
		factor = factor || 0;

		var rgb = "#", c, i;
		for (var i = 0; i < 3; i++) {
			c = parseInt(color.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * factor)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
		return rgb;
	}

	
	for (var i = 0; i < fruitColors.length; i++) {
		fruitColors[i] = colorMultiply(fruitColors[i], colorParam);
		fruitColors2[i] = colorMultiply(fruitColors[i], colorParam - 0.1);
	}
	
	

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
	var allElements = document.getElementsByTagName("*");
	for (var i = 0; i < allElements.length; i++) {
		allElements[i].style.color = fruitColors2[Math.floor(Math.random()*fruitColors2.length)];
		if (getComputedStyle(allElements[i]).backgroundColor != 'rgba(0, 0, 0, 0)') {
			allElements[i].style.backgroundColor = fruitColors[Math.floor(Math.random()*fruitColors.length)];
		}
	}

	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].href = 'https://en.wikipedia.org/wiki/Fruit';
	};
}