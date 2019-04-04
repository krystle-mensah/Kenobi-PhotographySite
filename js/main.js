// animate smooth scroll
// jquery grab id view work, .on an event. when  clicked run a function.
// in the function we create a variable called const images and set it to jquery id images and we the position at the top.  
/*
$('#view_work').on('click', function() {
	const images = $('#images').position().top;
// then we use jquery .animate method on the html and body
// then animate takes in an object and scolls from the top to images. then it takes in the time it takes which 900.
	$('html, body').animate(
		{
			scrollTop: images
		},  
		900  
	);
		
});

$('#about_section').on('click', function() {
	const images = $('#about').position().top;
// then we use jquery .animate method on the html and body
// then animate takes in an object and scolls from the top to images. then it takes in the time it takes which 900.
	$('html, body').animate(
		{
			scrollTop: images
		},  
		900  
	);
		
});

$('#social_section').on('click', function() {
	const images = $('#social').position().top;
// then we use jquery .animate method on the html and body
// then animate takes in an object and scolls from the top to images. then it takes in the time it takes which 900.
	$('html, body').animate(
		{
			scrollTop: images
		},  
		900  
	);
		
});
*/



// Click event for Nav Bar links


// const navButton = document.querySelector(".button");
// so now all your nav links are saved in variable called navbarLinks. 
const navbarLinks = document.querySelectorAll( "a");
//// for each element function add an event listern listerner click. 
navbarLinks.forEach(element => element.addEventListener("click", navbarLinkClick)); 

function navbarLinkClick( event ) {
	smoothScroll( event ); // calling the "smooth scroll" function. 
	//console.log(event.currentTarget);
	//const targetId = event.currentTarget.getAttribute("href");
	//console.log(targetId);
}
// Smooth-Scrolling


// APPROACH - #1 - Window.scrollTo() (window.scroll())

/*
function smoothScroll( event ) {
	const targetId = event.currentTarget.getAttribute("href");
	event.preventDefault()
	console.log( event.currentTarget );
	console.log(targetId);
	window.scrollTo({
		// From the top of the document query select the targetId. 
		top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
		left: 8000,
		behavior: "smooth"
	});
	
}
*/
// APPROACH - #2 Element.scrollIntroView(). Not working with know errors. 

/*
function smoothScroll( event ) {
	event.preventDefault()
	const targetId = event.currentTarget.getAttribute("href");
	//console.log(targetId);
	// element to scroll into view. 
	document.querySelector(targetId).scrollIntoView({ 
		// behavour value
		behavior: "smooth", 
		block: "start", 
		
	});
}
*/
// APPROACH - #3 window.requestAnimationFrame()


function smoothScroll( event ) {
	event.preventDefault();
	const targetId = event.currentTarget.getAttribute("href");
	const targetPosition = document.querySelector(targetId).offsetTop;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;  
	const duration = 1000;
	let start = null;

	window.requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		// window.scrollTo( 0, distance*( progress/duration ) + startPosition );
		window.scrollTo( 0, easeInOutQuad(progress, startPosition, distance, duration));
		if (progress < duration) window.requestAnimationFrame(step); {	
		}
	}
}
/*
function linear( t, b, c, d ) {
	return c*t/d + b;
}
*/

function easeInOutQuad( t, b, c, d ) {
	t /= d/2; 
	if ( t < 1 ) return c/2 * t * t + b; 
	t--;
	return -c/2 * ( t * ( t-2 ) -1 ) + b;
};


