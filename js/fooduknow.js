
//SMOOTH PAGE SCROLL
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - '150'
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

function scrollUptoTop(){
$('#gotop').gotop({

  // Background color
  background : '#000', 

  // Icon color
  color: '#fff', 

  // Rounded button?
  rounded: true, 

  // width/height
  width: '45px',
  height: '45px',

  // bottom position
  bottom : '25px',

  // right position
  right : '25px',

  // Window height after which show the button
  Show: 300, 

  // animation speed
  speed: 800,

  // custom html for the back to top button
  customHtml:'',

  // Show button only on mobile device
  mobileOnly: false,
 
  
});

}

$(document).ready(

  function () {
    $(this).scrollTop(0);
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

    scrollUptoTop();

    $('#tbl-yogurt').show();
    $('#mr-yogurt').css('color', 'rgb(244, 248, 131)');

    $('#mr-greentea').on('click', function () {
      $('#tbl-chocolate,#tbl-yogurt,#tbl-brownrice').hide();
      $('#tbl-greentea').show();
      $('#mr-yogurt').css('color', 'white');
    });

    $('#mr-yogurt').on('click', function () {
      $('#tbl-chocolate,#tbl-greentea,#tbl-brownrice').hide();
      $('#tbl-yogurt').show();
      $('#mr-yogurt').css('color', 'rgb(244, 248, 131)');
    });

    $('#mr-brownrice').on('click', function () {
      $('#tbl-chocolate,#tbl-yogurt,#tbl-greentea').hide();
      $('#tbl-brownrice').show();
      $('#mr-yogurt').css('color', 'white');
    });

    $('#mr-chocolate').on('click', function () {
      $('#tbl-brownrice,#tbl-yogurt,#tbl-greentea').hide();
      $('#tbl-chocolate').show();
      $('#mr-yogurt').css('color', 'white');
    });

    $(document).click(function () {
      $(".mega-menu").hide();
    });

    var div = $('#newsfeed');
    setInterval(function () {
      var pos = div.scrollTop();
      div.scrollTop(pos + 2);
    }, 200)


    $('#artificial-sweetner,#brown-rice,#healthy-bacteria,#seaweed,#chocolatey,#synbiotics,#turmeric-milk,#oil-less-fry,#quick-freeze,#irradiating-food,#green-tea,#green-tea1').click(function () {
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
  $(window).scrollTop(0)
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({ 'overflow': 'visible' });
  $('#articles-list').on('click', function (e) {
    e.stopPropagation();
    $('.mega-menu').toggle();
  });

})
//]]>


