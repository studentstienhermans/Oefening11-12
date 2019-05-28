var contentParent = $('.content-parent');

var getWinHeight = function() {
  return $(window).height();
};

var setLineHeight = function(element) {
  var childHeight = $($(element).children('.content')).height();
  $(element).css({
    lineHeight: (getWinHeight() + childHeight*0.75) + 'px'
  });
};

var setEls = function() {
  for(var i = 0; i < contentParent.length; i++) {
    setLineHeight(contentParent[i]);
  }
};

setEls();
$(window).resize(function(){setEls()});


var clearActive = function(el) {
  $(el).removeClass('active');
};

var addActive = function(el) {
  $(el).addClass('active');
};

$('.links a').on('click', function() {
  var that = this,
      $that = $(that),
      item = $that.attr('data-item');
  clearActive('.links a, .port');
  addActive(that);
  addActive('.' + item);
  return false;
});

$('.close').on('click', function() {
  clearActive('.links a, .port');
});