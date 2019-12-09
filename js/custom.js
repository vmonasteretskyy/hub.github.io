$(".brand_slider").slick({
  centerMode: true,
  infinite: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000
});
$(".logo_slider").slick({
  centerMode: true,
  infinite: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000
});
$(".menu_btn").click(function() {
  $(".menu").css("left", "19px");
});
$(".close_btn").click(function() {
  $(".menu").css("left", "-100vw");
});

function onlydesk() {
  if ($(window).width() > 767.9) {
    function go(target) {
      var target;
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function() {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem) {
          target.css("width", "100%");
        }
      });
    }
    $("#text_1").css("width", "100%");
    go($("#text_2"));
    go($("#text_3"));
    go($("#text_4"));
  }
}
$(document).ready(function() {
  onlydesk();
});
$(window).resize(function() {
  onlydesk();
});
$(document).ready(function() {
  function typeText(target, texttype) {
    var target;
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    var executed = false;
    $(window).scroll(function() {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem && !executed) {
        target.typewrite({
          showCursor: false,
          speed: 20,
          actions: [{ type: texttype }]
        });
        executed = true;
      }
      return executed;
    });
  }
  typeText($("#type_1"), "Let us help you solve your problem");
  typeText(
    $("#type_2"),
    "Search and Export Provider data based on NPI, Name, Location and Speciality"
  );
});

// scroll mouse
$(".mouse").on("click", "a", function(event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id = $(this).attr("href"),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top - 110;

  //анимируем переход на расстояние - top за 1500 мс
  $("body,html").animate({ scrollTop: top }, 1000);
});
