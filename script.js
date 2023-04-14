// let rocket = document.querySelector('.rocket-container');  
// let rocketRemoved;
// let rocketContainer = document.getElementById("#rocketContainer");

// const CHECKPOINT1 = document.getElementById('checkpoint1');
// const CHECKPOINT2 = document.getElementById('checkpoint2');
// const CHECKPOINT3 = document.getElementById('checkpoint3');
// const CHECKPOINT4 = document.getElementById('checkpoint4');

// let scrollPosition;
// let innerHeight;
// rocket.style.opacity = "1";

// function getYPosition(){
//   scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(scrollPosition);
// };

// function getInnerHeight() {
//   innerHeight = window.innerHeight;
//   console.log(innerHeight);
// };

// window.addEventListener('scroll', ()=> {
//   getYPosition();
//   getInnerHeight();
  
//   switch (true) {
//     case (scrollPosition >= 3020):
//       CHECKPOINT1.classList.add("checkpoint-selected");
//       CHECKPOINT2.classList.remove("checkpoint-selected");
//       CHECKPOINT3.classList.remove("checkpoint-selected");
//       CHECKPOINT4.classList.remove("checkpoint-selected");

//       console.log("checkpoint1: " + scrollPosition);
//       break;
  
//     case (scrollPosition >= 2170 && scrollPosition < 2280):
//       CHECKPOINT1.classList.remove("checkpoint-selected");
//       CHECKPOINT2.classList.add("checkpoint-selected");
//       CHECKPOINT3.classList.remove("checkpoint-selected");
//       CHECKPOINT4.classList.remove("checkpoint-selected");

//       rocket.style.opacity = "0";
//       rocket.classList.remove("rocket-container");
//       rocketRemoved = true;
      
//       console.log("checkpoint2: " + scrollPosition);
//       break;
  
//     case (scrollPosition >= 900 && scrollPosition < 1000):
//       CHECKPOINT1.classList.remove("checkpoint-selected");
//       CHECKPOINT2.classList.remove("checkpoint-selected");
//       CHECKPOINT3.classList.add("checkpoint-selected");
//       CHECKPOINT4.classList.remove("checkpoint-selected");
//       console.log("checkpoint4: " + scrollPosition);
//       break;

//     case (scrollPosition >= 0 && scrollPosition < 400):
//       CHECKPOINT1.classList.remove("checkpoint-selected");
//       CHECKPOINT2.classList.remove("checkpoint-selected");
//       CHECKPOINT3.classList.remove("checkpoint-selected");
//       CHECKPOINT4.classList.add("checkpoint-selected");
//       console.log("checkpoint3: " + scrollPosition);
  
//     // default:
//   }});




// const faders = document.querySelector(".fade-in");
// const appearOptions = {
//   threshold: 1
// };


// sectionObserver.observe(sectionOne);
//  const appearOnScroll = new IntersectionObserver (function (entries, appearOnScroll) {
//   entries.forEach(entry => {
//     if(!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add(".appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   })
//  }, appearOptions);

//  faders.forEach(fader => {
//   appearOnScroll.observe(fader);

//  })


var fadeElements = document.getElementsByClassName('fade-in');

function FadeIn() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/14);

		if (rect.top <= fadeInPoint) {
			element.classList.add('fade-in--visible');
			element.classList.add('fade-in--animate');
      		element.classList.add('move-in');
      
			element.classList.remove('fade-in--hidden');
      
		} else {
			element.classList.remove('fade-in--visible');
			element.classList.add('fade-in--hidden');
      
      		element.classList.remove('move-in');
      
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('fade-in--visible');
			element.classList.add('fade-in--hidden');
			element.classList.remove('move-in');
		}
	}
}

document.addEventListener('scroll', FadeIn);
window.addEventListener('resize', FadeIn);
document.addEventListener('DOMContentLoaded', function() {
    FadeIn();
});




let scrollPosition;
let innerHeight;
let rocket = document.querySelector('.rocket');
let rocketPosition;

function getYPosition(){
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollPosition);
};

function getInnerHeight() {
  innerHeight = window.innerHeight;
  // console.log(innerHeight);
};

function hideRocket() {
  if (scrollPosition <= 1500 ) {
    rocket.style.opacity = "0";
  } else {
    rocket.style.opacity = "1";
  }
};

window.addEventListener("scroll", function() {
  getYPosition();
  hideRocket();
});

