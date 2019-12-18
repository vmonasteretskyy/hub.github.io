// general srcipts
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
    if ($("main").hasClass("home")) {
      go($("#text_2"));
      go($("#text_3"));
      go($("#text_4"));
    }
  }
}

$(document).ready(function() {
  $(".menu_btn").click(function() {
    $(".menu").css("right", "20px");
  });
  $(".close_btn").click(function() {
    $(".menu").css("right", "-100vw");
  });
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
  // scrips for home page
  if ($("main").hasClass("home")) {
    $(".brand_slider").slick({
      centerMode: true,
      infinite: true,
      arrows: false,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1200
    });
    $(".logo_slider").slick({
      centerMode: true,
      infinite: true,
      arrows: false,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1200
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
    typeText($("#type_1"), "Let us help you solve your problem");
    typeText(
      $("#type_2"),
      "Search and Export Provider data based on NPI, Name, Location and Speciality"
    );
  } else if ($("main").hasClass("retrieval")) {
    typeText($("#type_1"), "Let us know what you are looking for…");
  } else if ($("main").hasClass("reporting")) {
    typeText(
      $("#type_1"),
      "Like to build a Report? Click here to submit a request and someone will get in touch with you within 2 business days..."
    );
  } else if ($("main").hasClass("exchange")) {
    typeText(
      $("#type_1"),
      "Like to know more about how FHIR can benefit you? Click here to submit a request and someone will get in touch with you in 1-2 business day(s) "
    );
  } else if ($("main").hasClass("automation")) {
    typeText(
      $("#type_1"),
      "Like to know how your business process can be streamlined? Click here to submit a request and someone will get in touch with you in 1-2 business day(s)  "
    );
  }
  onlydesk();
});

$(window).resize(function() {
  onlydesk();
});
