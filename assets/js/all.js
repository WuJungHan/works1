"use strict";

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
//# sourceMappingURL=all.js.map
