(function () {

	let es6slider = new ES6Slider('ES6Slider');

	let slide1 = new Slide('Slide 1');
	let image1 = new Image('img/backtothefuture.jpg');
	image1.style.set({
		width : '100%',
		height : '100%'
	});
	let text1 = new Text('ES6 is awesome!');
	text1.style.set({
		'color' : 'red',
		'font-size' : '2em'
	});
	slide1.addImage(image1);
	slide1.addText(text1);

	let slide2 = new Slide('Slide 2');
	let image2 = new Image('img/myimage2.png');
	let text2 = new Text('ES6 is fu***** awesome!');
	slide2.addImage(image2);
	slide2.addText(text2);

	let slide3 = new Slide('Slide 3');
	let text3 = new Text('Look, this is another slide about ES6!');
	slide3.addText(text3);

	es6slider.addSlide(slide1);
	es6slider.addSlide(slide2);
	es6slider.addSlide(slide3);
	es6slider.render();

	console.log(es6slider);

}());