$(document).ready(function(){

  $("#email").inputmask('email');
    $("#email").inputmask({
        'autoUnmask': true
    });


  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
          items:1,
          nav:true,
          center:true,
          dots:false

        },
        480:{
          loop: false,
          items:3,
          nav:true,
          center:false
        },
        768:{
            items:4,
            nav:true,
            center:false,
            dots:false
        },
        1279:{
            items:5,
            center:true,
            nav:true,
        },
        2000:{
            items:5,
            center:true,
            nav:true,

        }

    }
});


  // $(".owl-carousel2").owlCarousel({
  //   loop:true,
  //   margin:10,
  //   responsive:{
  //       0:{
  //         items:1,
  //         nav:false,
  //         center:true,
  //         dots:false

  //       },
  //       480:{
  //         loop: false,
  //         items:3,
  //         nav:false,
  //         center:false
  //       },
  //       768:{
  //           items:4,
  //           nav:true,
  //           center:false,
  //           dots:false
  //       }
  //   }
  // });

  $(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      responsive:{
          0:{
            items:1,
            nav:true,
            center:true,
            dots:false
          },
          480:{
            loop: false,
            items:3,
            nav:true,
            center:false
          },
          768:{
              items:4,
              nav:true,
              center:false,
              dots:false
          },
          1279:{
              items:5,
              center:true,
              nav:true,
          },
          2000:{
              items:5,
              center:true,
              nav:true,
          }
      }
  });
    $("#causes_slider").owlCarousel({
      items: 1,
      center:true,
      loop:true,
      nav:true,
      dots:true,

    });
  })




  $( "#tabs" ).tabs({
    active: 0
  });
});


