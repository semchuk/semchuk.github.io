document.body.onload = function() {
  setTimeout(function () {
      var pre = document.getElementById('pre');
      if(!pre.classList.contains('done')){
        pre.classList.add('done');
        setTimeout(function () {
          $('.fadeInUp').css('animation-name', 'anim1');
        }, 500);
    }
  }, 3000);
}
setTimeout(function () {
  $('.fadeInUp').css('animation-name', 'anim2');
  setTimeout(function () {
    $('.fade').css('animation-name', 'anim3');
    setTimeout(function () {
      $('.fade').css('animation-name', 'anim2');
      setTimeout(function () {
        $('.fade1').css('animation-name', 'anim3');
    },2000)
    },3000);
  },2000);
}, 6000);
