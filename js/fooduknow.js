
//SMOOTH PAGE SCROLL
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
function animateContent(direction) {
  var animationOffset = $('.container1').height() - $('.content').height() - 30;
  if (direction == 'up') {
    animationOffset = 0;
  }

  $('.content').animate({ "marginTop": (animationOffset) + "px" }, 5000);
}

function up() {
  animateContent("up")
}


function start() {
  setTimeout(function () {
    down();
  }, 2000);
  setTimeout(function () {
    up();
  }, 2000);
  setTimeout(function () {
  }, 5000);
}

$(document).ready(

  function () {
    $('#header-top').load('nav.html');
    $('#footer-bottom').load('footer.html');
    $('#header-top-articles').load('../nav.html');
    $('#footer-bottom-articles').load('../footer.html');

    $("html").niceScroll({
      cursorcolor: "#740091",
      scrollspeed: "100",
      cursorborder: "2px solid #740091",
      horizrailenabled: "false",
      cursorborderradius: "0px"
    });

    if ($('.content').height() > $('.container1').height()) {
      setInterval(function () {
        start();
      }, 3000);

    }

    wow = new WOW(
      {
        animateClass: 'animated',
        mobile: false,
        offset: 100
      }
    );
    wow.init();

    $(document).click(function () {
      $(".mega-menu").hide();
    });

    var div = $('#newsfeed');
    setInterval(function () {
      var pos = div.scrollTop();
      div.scrollTop(pos + 2);
    }, 200)


    $('#artificial-sweetner,#brown-rice,#healthy-bacteria,#seaweed,#chocolatey,#synbiotics,#turmeric-milk,#oil-less-fry,#quick-freeze,#irradiating-food,#green-tea').click(function () {
      $('#div-' + this.id).slideToggle("slow");
      $(this).text(function (i, text) {
        return text === "Read More" ? "Read Less" : "Read More";
      });
    });

    $(".nav a").on("click", function () {
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });

  }
);


/*Preloader*/
//<![CDATA[
$(window).load(function () { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({ 'overflow': 'visible' });
  $('#articles-list').on('click', function (e) {
    e.stopPropagation();
    $('.mega-menu').toggle();
  });

})
//]]>


