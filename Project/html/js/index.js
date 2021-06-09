  // function for object
window.onresize = function(event) {
  viewportwidth = $(window).width();
  if (viewportwidth <= 991.95) {
    $('#collapseExample').removeClass("show");
  } else if (viewportwidth >= 992) {
    $('#collapseExample').addClass("show");
  }   
}

