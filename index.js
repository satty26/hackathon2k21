var textString = `
Welcome to E-Cell IIIT Pune
......
Let's get started....

app.load("Hackathon 2k21");

Running the script.........

Loading the website.......
.........
........
.......`;

$(document).ready(function() {


	const textArray = textString.split('');
	const textElem = $('.hacking-animation__text');

	let count = 0;

	setInterval(() => {
			if(textArray[count] === "\n") {
					textElem.append("<br>");
			}
			else {
					textElem.append(`<span class="hacking-animation__character">${textArray[count]}</span>`);
			}

			count++;
			if (count === textArray.length) {
					count = 0;
			}
	}, 30);
	setTimeout(function(){
        $('body').addClass('loaded');
        	AOS.init();
				(function() {

          'use strict';

          // define variables
          var items = document.querySelectorAll(".timeline li");

          // check if an element is in viewport
          // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
          function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          }

          function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
              }
            }
          }

          // listen for events
          window.addEventListener("load", callbackFunc);
          window.addEventListener("resize", callbackFunc);
          window.addEventListener("scroll", callbackFunc);

        })();


    }, 3000);
});
function updateTimer() {
future = Date.parse("may 10, 2021 00:00:00");
now = new Date();
diff = future - now;

days = Math.floor(diff / (1000 * 60 * 60 * 24));
hours = Math.floor(diff / (1000 * 60 * 60));
mins = Math.floor(diff / (1000 * 60));
secs = Math.floor(diff / 1000);

d = days;
h = hours - days * 24;
m = mins - hours * 60;
s = secs - mins * 60;

document.getElementById("timer")
		.innerHTML =
		'<div>' + d + '<span>days</span></div>' +
		'<div>' + h + '<span>hours</span></div>' +
		'<div>' + m + '<span>minutes</span></div>' +
		'<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);