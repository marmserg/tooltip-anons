"use strict";


$(document).ready(function () {

  var tooltipTimer;
  var showDelay = 600;  // Задержка отображения подсказок в миллисекундах
  $('ul.stikers li').hover(function() {
    var $anons = $(this).find('.tooltip-anons');
    tooltipTimer = setTimeout(function() {
      $anons.fadeIn(100);
    }, showDelay);
  }, function() {
    clearTimeout(tooltipTimer);
    $(this).find('.tooltip-anons').fadeOut(10);
  });

});

