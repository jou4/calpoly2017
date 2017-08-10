$(function(){

  // get splash instance
  var $splash = $("#splash");
  var $contents = $("#contents");
  var $logo = $("#splash_logo");

  // check url has the parameter "nosplash"
  var query_string = location.search;
  // skip splash when the parameter is passed
  if(query_string.indexOf("nosplash") >= 0){
    // show contents
    $contents.css("display", "block");
    return;
  }

  // show splash & contents
  $splash.css("display", "block");
  $contents.css("display", "block");

  // start to remove splash after 1 second
  setTimeout(function(){
    $logo.animate({
      width: 320
    }, 500, function(){});
    $splash.animate({
      opacity: 0
    }, 500, function(){
      $splash.css("display", "none");
    });
  }, 1000);

});
