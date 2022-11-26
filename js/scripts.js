// ------------------------
// Funcões gerais

new WOW().init();

$(document).ready(function() {

	if (/Mobi|Android/i.test(navigator.userAgent)) {
	    $("body").addClass("dsp-movel");
	}

	$(this).on("click", "a[href='#']", function(event) {
		event.preventDefault();
	});

	// $(this).on("click", ".mtr-site", function () {
  //       var category = $(this).data("category");
  //       var label = $(this).data("label");

  //       if (!category || !label) return;

  //       if ((window.location.href.indexOf("prod.ag") >= 0) && (window.location.href.indexOf("homologacao") < 0)) {
	//         ga("send", "event", "" + category + "", "click", "" + label + "");
  //       }
  //   });

	$(this).on("click", ".jsGoToSection:not('.off')", function() {
		var $obj = $(this);
		var sectionId = $obj.data("section");

		$obj.addClass("off");

		// Scroll para section clicada

		var heiHeader  = $("header").innerHeight();
		var posSection = $("#section-" + sectionId).offset().top;

    $("#menu-mobile__check").prop("checked",false)
    if(sectionId == "inicio") {
      $("html, body").animate({scrollTop: (posSection - heiHeader)}, 750, function() {
        $(".wow").addClass("trigger");
        $obj.removeClass("off");
      });
    } else if (sectionId == "destaque-2") {
      $("html, body").animate({scrollTop: (posSection - 120 - heiHeader)}, 750, function() {
        $(".wow").addClass("trigger");
        $obj.removeClass("off");
      });
    // } else if (sectionId == "amostras") {
    //   $("html, body").animate({scrollTop: (posSection - 180 - heiHeader)}, 750, function() {
    //     $(".wow").addClass("trigger");
    //     $obj.removeClass("off");
    //   });
    } else { 
      $("html, body").animate({scrollTop: (posSection + 0 - heiHeader)}, 750, function() {
        $(".wow").addClass("trigger");
        $obj.removeClass("off");
      });
    }
	});
  
  $(this).on("click", ".label__toggle:not('.off')", function() {
		var $obj = $(this);

		$obj.addClass("off");

    var heiHeader  = $("header").innerHeight();
		var posSection = $obj.parent().offset().top;

    $("html, body").animate({scrollTop: (posSection - 30 - heiHeader)}, 750, function() {
      $obj.removeClass("off");
    });
  })

  // $(this).on("click","*:not(.jsGoToSection)",function () {
  //   $("#menu-mobile__check").prop("checked",false)
  // })

	// Cookies
    $("#disclaimerCookie").removeClass("hidden-cookie");

    if (localStorage.policyPrivacyProd == "accept") {
        $("#disclaimerCookie").addClass("hidden-cookie");
    }

    $(this).on("click", ".actAcceptTerms", function(e) {
        e.preventDefault();
        localStorage.setItem("policyPrivacyProd", "accept");
        $("#disclaimerCookie").addClass("hidden-cookie");
    });

    $(this).on("click", ".actRejectTerms", function(e) {
        e.preventDefault();
        localStorage.setItem("policyPrivacyProd", "denied");
        $("#disclaimerCookie").addClass("hidden-cookie");
    });

  function paginationCarouselInitial(idObj, currentItem) {
    var qtdVisible = $('#' + idObj).find(".owl-item.active").length;
    var totalItens = $('#' + idObj).find(".owl-item").length;

    console.log("Visível: " +qtdVisible)

  
    $('#' + idObj).find(".owl-nav .owl-prev").after("<span class='pagination-carousel'><span class='destaque'>" + (currentItem + qtdVisible) + "</span>/" + totalItens + "</span>");
  }
  
  function paginationCarouselChange(idObj, currentItem) {
    var qtdVisible = $('#' + idObj).find(".owl-item.active").length;
    var totalItens = $('#' + idObj).find(".owl-item").length;
    var countDisplay = currentItem + qtdVisible

    // console.log("Total items: " +totalItens)
    // console.log ("Count display: "+countDisplay)
    if(countDisplay > totalItens) {
      // console.log("É maior")
      countDisplay = totalItens;
    }
  
    $('#' + idObj).find(".owl-nav .pagination-carousel").html("<span class='destaque'>" + countDisplay + "</span>/" + totalItens);
  }

  $('.jsCarouselGskPills').owlCarousel({
    loop:false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    nav:true,
    mouseDrag: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: true
      },
      768: {
        items: 2,
        slideBy: 1
      },
      1199: {
        items: 3,
        slideBy: 1
      }
    },
    onInitialized: function(event) {
      paginationCarouselInitial("jsCarouselGskPills", event.item.index);
    },
    onChanged: function(event) {
      paginationCarouselChange("jsCarouselGskPills", event.item.index);
    },
    onResized: function(event) {
      paginationCarouselChange("jsCarouselGskPills", event.item.index);
    }
    ,
    // onInitialized: function(event) {
    //   var currentItem = 1;
    //   var totalItens = $('.jsCarouselGskPills').find(".owl-item:not('cloned')").length;
      
    //   $('.jsCarouselGskPills').find(".owl-nav .owl-prev").after("<span class='pagination-carousel'><span class='destaque'>" + currentItem + "</span>/" + totalItens + "</span>");
    // },
    // onChanged: function(event) {
    //   var currentItem = (event.item.index) + 1;
    //   var totalItens = $('.jsCarouselGskPills').find(".owl-item:not('cloned')").length;

    //   $('.jsCarouselGskPills').find(".owl-nav .pagination-carousel").html("<span class='destaque'>" + currentItem + "</span>/" + totalItens);
    // }
  });

  $('.jsCarouselProjetos').owlCarousel({
    loop:false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    nav:true,
    mouseDrag: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: true
      },
      768: {
        items: 2,
        slideBy: 1
      },
      1199: {
        items: 3,
        slideBy: 1
      }
    },
    onInitialized: function(event) {
      paginationCarouselInitial("jsCarouselProjetos", event.item.index);
    },
    onChanged: function(event) {
      paginationCarouselChange("jsCarouselProjetos", event.item.index);
    },
    onResized: function(event) {
      paginationCarouselChange("jsCarouselProjetos", event.item.index);
    }
  });

  $('.jsCarouselAmostras').owlCarousel({
		loop:false,
		margin: 0,
		autoplay: false,
		autoplayTimeout: 5000,
		nav:true,
		mouseDrag: true,
		autoWidth: true,
		responsive: {
			0: {
				items: 1,
				autoWidth: true
			},
			768: {
				items: 2,
				slideBy: 1
			},
			1199: {
				items: 3,
				slideBy: 1
			}
		}
	});

  carouselTratamento()

  $('.jsCarouselAnti').owlCarousel({
    loop:false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: false,
    mouseDrag: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: true,
        nav: true
      },
      768: {
        items: 1,
        slideBy: 1,
        nav: false
      },
      1199: {
        items: 2,
        slideBy: 1,
        nav: false
      }
    },
    onInitialized: function(event) {
      var currentItem = 1;
      var totalItens = $('.jsCarouselAnti').find(".owl-item:not('cloned')").length;
      
      $('.jsCarouselAnti').find(".owl-nav .owl-prev").after("<span class='pagination-carousel'><span class='destaque'>" + currentItem + "</span>/" + totalItens + "</span>");
    },
    onChanged: function(event) {
      var currentItem = (event.item.index) + 1;
      var totalItens = $('.jsCarouselAnti').find(".owl-item:not('cloned')").length;

      $('.jsCarouselAnti').find(".owl-nav .pagination-carousel").html("<span class='destaque'>" + currentItem + "</span>/" + totalItens);
    }
  });

  // Video overlay
  $(".jsVideOverlay").on("click",function() {
    var videoSrc = $(this).attr("data-src");
    var videoOverlay = $(".video-overlay")
    var video = $(".video-overlay .background .video video source").attr("src")
    
    $(".video-overlay .background .video video source").attr("src", "")
    $(".video-overlay .background .video video source").attr("src", videoSrc)
    $(".video-overlay .background .video video")[0].load(); 
    videoOverlay.fadeIn("fast");
    
  })

  $("#close-video").on("click", function() {
    var videoOverlay = $(".video-overlay")

    videoOverlay.fadeOut("fast");
    $('.video-overlay .background .video video').get(0).pause();
    $('.video-overlay .background .video video').get(0).currentTime = 0;
  })

  $('.video-overlay .background .wrapper').on("click", function() {
  
    var videoOverlay = $(".video-overlay")

    videoOverlay.fadeOut("fast");
    $('.video-overlay .background .video video').get(0).pause();
    $('.video-overlay .background .video video').get(0).currentTime = 0;
  })
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(window).on("resize", function() {
  carouselTratamento()
})

$(window).on("scroll", function() {
	var heiWindow = ($(window).height()) / 2;
	var posScroll = $(window).scrollTop() + heiWindow;

	$(".jsFadeText h2").each(function() {
		var posItem = $(this).offset().top;
		var margen = 0;
		var margenFinal = 110;

		if (posItem >= (posScroll + margen) && posItem < (posScroll + margenFinal)) {
			$(".jsFadeText h2").removeClass("mark");
			$(this).addClass("mark");
		}
	});
});

function carouselTratamento() {

  function paginationCarouselInitial(idObj, currentItem) {
    var qtdVisible = $('#' + idObj).find(".owl-item.active").length;
    var totalItens = $('#' + idObj).find(".owl-item").length;
  
    $('#' + idObj).find(".owl-nav .owl-prev").after("<span class='pagination-carousel'><span class='destaque'>" + (currentItem + qtdVisible) + "</span>/" + totalItens + "</span>");
  }
  
  function paginationCarouselChange(idObj, currentItem) {
    var qtdVisible = $('#' + idObj).find(".owl-item.active").length;
    var totalItens = $('#' + idObj).find(".owl-item").length;
    var countDisplay = currentItem + qtdVisible

    console.log (countDisplay)
    if(countDisplay > totalItens) {
      console.log("teste")
      countDisplay = totalItens;
    }
  
    $('#' + idObj).find(".owl-nav .pagination-carousel").html("<span class='destaque'>" + countDisplay + "</span>/" + totalItens);
  }
  if($(window).width() < 1023) {
    $('.jsCarouselTratamento').owlCarousel({
      loop:false,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 5000,
      nav:true,
      mouseDrag: true,
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
          autoWidth: true
        },
        768: {
          items: 2,
          slideBy: 1
        },
        1199: {
          items: 3,
          slideBy: 1
        }
      },
      onInitialized: function(event) {
        paginationCarouselInitial("jsCarouselTratamento", event.item.index);
      },
      onChanged: function(event) {
        paginationCarouselChange("jsCarouselTratamento", event.item.index);
      },
      onResized: function(event) {
        paginationCarouselChange("jsCarouselTratamento", event.item.index);
      }
    });

    $('.jsCarouselArtigos').owlCarousel({
      loop:false,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 5000,
      nav:true,
      mouseDrag: true,
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
          autoWidth: true
        },
        768: {
          items: 2,
          slideBy: 1
        },
        1199: {
          items: 3,
          slideBy: 1
        }
      },
      onInitialized: function(event) {
        paginationCarouselInitial("jsCarouselArtigos", event.item.index);
      },
      onChanged: function(event) {
        paginationCarouselChange("jsCarouselArtigos", event.item.index);
      },
      onResized: function(event) {
        paginationCarouselChange("jsCarouselArtigos", event.item.index);
      }
    });

    $('.jsCarouselRecursos').owlCarousel({
      loop:false,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 5000,
      nav:true,
      mouseDrag: true,
      autoWidth: true,
      responsive: {
        0: {
          items: 1,
          autoWidth: true
        },
        768: {
          items: 2,
          slideBy: 1
        },
        1199: {
          items: 3,
          slideBy: 1
        }
      },
      onInitialized: function(event) {
        paginationCarouselInitial("jsCarouselRecursos", event.item.index);
      },
      onChanged: function(event) {
        paginationCarouselChange("jsCarouselRecursos", event.item.index);
      },
      onResized: function(event) {
        paginationCarouselChange("jsCarouselRecursos", event.item.index);
      }
    });
  } else {
    $('.jsCarouselTratamento').owlCarousel("destroy");
    $('.jsCarouselArtigos').owlCarousel("destroy");
    $('.jsCarouselRecursos').owlCarousel("destroy");
  }
}

$(window).scroll(function(){
  var windowOffY = $(window).scrollTop();
  var windowHeight = $(window).height();
  var headHeight = $('header').height();
  if($(window).width() <= 768) {
    $('.section').each(function(){
      var elOffY = $(this).offset().top
      if(elOffY + (headHeight + 500) < (windowOffY + windowHeight) && 
        elOffY+250+$(this).height() > windowOffY){
          $('.jsGoToSection').removeClass('mark');
          var section = $(this).attr('id');
          var sctSrt = section.split("section-")
          // console.log(sctSrt[1])
          $('.jsGoToSection[data-section="'+sctSrt[1]+'"]').addClass('mark');
          return;
        }
    });
  } else if ($(window).width() <= 1024) {
    $('.section').each(function(){
      var elOffY = $(this).offset().top
      if(elOffY + (headHeight + 500
        
        ) < (windowOffY + windowHeight) && 
        elOffY+100+$(this).height() > windowOffY){
          $('.jsGoToSection').removeClass('mark');
          var section = $(this).attr('id');
          var sctSrt = section.split("section-")
          // console.log(sctSrt[1])
          $('.jsGoToSection[data-section="'+sctSrt[1]+'"]').addClass('mark');
          return;
        }
    });
  } else if ($(window).width() <= 1023) {
    $('.section').each(function(){
      var elOffY = $(this).offset().top
      if(elOffY + (headHeight + 980) < (windowOffY + windowHeight) && 
        elOffY+100+$(this).height() > windowOffY){
          $('.jsGoToSection').removeClass('mark');
          var section = $(this).attr('id');
          var sctSrt = section.split("section-")
          // console.log(sctSrt[1])
          $('.jsGoToSection[data-section="'+sctSrt[1]+'"]').addClass('mark');
          return;
        }
    });
  } else {
    $('.section').each(function(){
      var elOffY = $(this).offset().top
      if(elOffY + (headHeight - 80) < (windowOffY + windowHeight) && 
        elOffY+200+$(this).height() > windowOffY){
          $('.jsGoToSection').removeClass('mark');
          var section = $(this).attr('id');
          var sctSrt = section.split("section-")
          // console.log(sctSrt[1])
          $('.jsGoToSection[data-section="'+sctSrt[1]+'"]').addClass('mark');
          return;
        }
    });
  }
  
  
});