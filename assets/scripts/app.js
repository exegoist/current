var scrollingScreen = (function() {
  var screen = 0,
      $sections = $('.sections'),
      sectionNumber = $sections.find('.section').length;
      scroll = true;

  return {
    init: function() {
      $('.container').on('mousewheel', function(event) {
        var position;

        if (scroll) {

          if (event.deltaY > 0 && screen > 0) {
            screen--;
            scroll = false;
          } else if (event.deltaY < 0 && screen < 3) { //(sectionNumber - 1)
            screen++;
            scroll = false;
          }
          $('ul.left li.active').removeClass("active");
          $('ul.left li').eq(screen).addClass("active");

          position = (-screen * 100) + '%';
          $sections.css('top', position);
          }
      });

      $sections.on('transitionend', function() {
        scroll = true;
      });
      $('ul.left li').click(function() {
          $('ul.left li.active').removeClass("active");
          $('ul.left li').eq($('ul.left li').index(this)).addClass("active");
          position = (-$('ul.left li').index(this) * 100) + '%';
          $sections.css('top', position);
      });

    }
  }
}());

$(document).ready(function() {
  scrollingScreen.init();
});
$(window).bind("load", function () {
  var center = $(".center");
  var bottom = $(".bottom");
  var container = $(".container");
  var padding = (container.height() - center.height() - bottom.height())/2;
  // var paddingimg = (center.height() - $(".center img").height())/2;
  if (padding > 0) {
    center.css({
      'padding-top': padding + 'px',
      'padding-bottom': padding + 'px',
    });
  }
});

$(document).foundation();
