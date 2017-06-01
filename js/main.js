document.body.onload = function() {
  setTimeout(function () {
      var pre = document.getElementById('pre');
      if(!pre.classList.contains('done')){
        pre.classList.add('done');
        setTimeout(function () {
          $('.animated').css('animation-name', 'anim1');
        }, 500);
    }
  }, 3000);
}
setTimeout(function () {
  $('.fadeInUp').css('animation-name', 'anim2');
  setTimeout(function () {
    $('.fade').css('animation-name', 'anim3');
  },1000);
}, 6000);
