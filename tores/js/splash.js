$(function(){

  // check url has the parameter "nosplash"
  var query_string = location.search;
  // skip splash when the parameter is passed
  if(query_string.indexOf("nosplash=") >= 0){
    return;
  }

  // get splash instance
  var $splash = $("#splash");
  var $logo = $("#splash_logo");
  // show splash
  $splash.css("display", "block");

  // start to remove splash after 1 second
  setTimeout(function(){
    $logo.animate({
      width: 640
    }, 500, function(){});
    $splash.animate({
      opacity: 0
    }, 500, function(){
      $splash.css("display", "none");
    });
  }, 1000);

});
