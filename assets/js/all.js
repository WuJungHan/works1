"use strict";

$(document).ready(function () {
  //jQuery UI Datepicker
  $(function () {
    $("#datepicker-form").datepicker({
      minDate: -20,
      maxDate: "+1M +10D"
    });
  });
  $(function () {
    $("#datepicker-to").datepicker({
      minDate: -20,
      maxDate: "+1M +10D"
    });
  }); //jQuery UI Datepicker end
  //Swiper 左右頁

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); //Swiper 結束
  //元件 Slideshow 

  $(".slideshow-inner a").click(function () {
    $(".slideshow-item-active img").attr("src", $(this).attr('href'));
    return false;
  }); //Slideshow end
  //id#getFixed 可自由調整Fixed啟動或結束 
  //把所需固定的元素外面包 id = " getFixed " 

  function fixDiv() {
    var $cache = $('#getFixed');
    if ($(window).scrollTop() > 100) $cache.css({
      //'position': '屬性'
      'position': '',
      //'方向': '指定位置的px或屬性'
      'buttom': ''
    });else $cache.css({
      //'position': '屬性'
      'position': '',
      //'方向': '指定位置的px或屬性'
      'buttom': ''
    });
  }

  $(window).scroll(fixDiv);
  fixDiv(); //id#getFixed end
});
//# sourceMappingURL=all.js.map
