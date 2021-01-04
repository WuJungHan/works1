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
});
//# sourceMappingURL=all.js.map
