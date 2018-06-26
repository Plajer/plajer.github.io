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
    document.title = currentState ? "Plajer's Lair" : animatedTitle;
    currentState = !currentState;
  }
}

function restoreTitle() {
  clearInterval(timer);
  document.title = "Plajer's Lair"; // restore original title
}

// Change page title on blur
$(window).blur(function() {
    animateTitle();
});

// Change page title back on focus
$(window).focus(function() {
    restoreTitle();
});

 $('#welcome').hover(
    function(){
      var $this = $('#welcome .title');
      $this.data('transform', $this.css('transform')).css('transform', 'scale(1.05)');
    },
    function(){
      var $this = $('#welcome .title');
      $this.css('transform', $this.data('transform'));
    }
  );
  
   $('#footer').hover(
    function(){
      var $this = $('#footer .title');
      $this.data('transform', $this.css('transform')).css('transform', 'scale(1.05)');
    },
    function(){
      var $this = $('#footer .title');
      $this.css('transform', $this.data('transform'));
    }
  );
 
  $('#portfolio').hover(
    function(){
      var $this = $('#portfolio .title');
      $this.data('transform', $this.css('transform')).css('transform', 'scale(1.05)');
    },
    function(){
      var $this = $('#portfolio .title');
      $this.css('transform', $this.data('transform'));
    }
  );  

});