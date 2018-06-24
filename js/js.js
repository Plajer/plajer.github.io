//thanks to https://stackoverflow.com/questions/23731357/how-do-i-make-text-inside-the-title-tag-animate-using-javascript
$(function() {

var origTitle, animatedTitle, timer;
var titles = ["Back here!", "You still there?", "Hello?", "Come back :(", "Close me then...", "I'm waiting..."];

function animateTitle() {
  var currentState = false;
  origTitle = document.title;  // save original title
  animatedTitle = titles[Math.floor(Math.random()* titles.length)];
  timer = setInterval(startAnimation, 2000);

  function startAnimation() {
    // animate between the original and the new title
	animatedTitle = titles[Math.floor(Math.random()* titles.length)];
    document.title = currentState ? origTitle : animatedTitle;
    currentState = !currentState;
  }
}

function restoreTitle() {
  clearInterval(timer);
  document.title = origTitle; // restore original title
}

// Change page title on blur
$(window).blur(function() {
    animateTitle();
});

// Change page title back on focus
$(window).focus(function() {
    restoreTitle();
});

});