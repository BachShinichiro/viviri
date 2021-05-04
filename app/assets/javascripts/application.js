// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery/dist/jquery.js
//= require jquery-migrate-min

//= require_tree .


$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW < 880){
		var headerH =0;
	}
	else{
		var headerH =63;
	}

	document.addEventListener("turbolinks:load"
, (nav).on('click', function(){
    nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - headerH
    }, 500);
		$(this).addClass('active');
		if (winW < 880){
      $('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
    return false;
	}));



	$('.panel').hide();
	$('#menuWrap').toggle(function(){
    $(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
    $(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

	$(window).on('scroll', function(){
    var curPos = $(this).scrollTop();
		if(curPos > 80){
      $('#mainnav').addClass('changeNav');
		}
		else{
      $('#mainnav').removeClass('changeNav');
		}
	});

  $(function () {
    var video = $("video").get(0);
    $(".music").on("click",function(){
     if(video.muted){
      video.muted = false;
     }else{
      video.muted = true;
     }
    });
   });
});
