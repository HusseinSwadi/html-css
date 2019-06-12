var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

$('#navtoggle').click(function() {
    rotation += 45;
    $('.rotate').rotate(rotation);
});

function knife() {
    var myKnife = document.getElementById("weapon1");
    myKnife.style.display = "block";
    /*
    if (myKnife.style.display == "none") {
		myKnife.style.display = "block";
	  } else {
		myKnife.style.display = "none";
      }
    */
}

function hammer() {
    var myHammer = document.getElementById("weapon2");
    if (myHammer.style.display == "none") {
		myHammer.style.display = "block";
	  } else {
		myHammer.style.display = "none";
	  }
}

a