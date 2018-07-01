// 공통
$(document).ready(function(){

	// skip navigation
	var $skip_navigation = $(".skip_nav");
	var $skip_links = $skip_navigation
		.addClass("skip_content")
		.find("a").addClass("a11y_hidden focusable");

	$skip_links.on("click", function(e) {
		e.preventDefault();

		var $target = $(e.target.getAttribute("href"));
		$target.attr("tabindex", -1).focus();
	});


	// 셀렉트박스
	$(".familysite .btn_fam").click(function(){
		$(this).parents(".familysite").toggleClass("on");
	});

	// 메인 - 사회공헌 부분
	$(".bn_dot li").click(function () {
		$(".bn_dot li").removeClass("on");
		$(this).addClass("on");

		$(".bn_spon li").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
	});


	// 서브페이지 게시판 검색 셀렉박스 관련
	var selectTarget = $('.srch_board .select_opt select');
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});
	$(".srch_board .select_opt").click(function(){
		$(this).toggleClass("on");
	});


	// 헤더 드롭다운 GNB
	function gnb_dropdown(){
		var $gnb = $(".gnb");
		var $bg_gnb = $(".bg_header");
		var bg_gnbState = true;
		var h = 0;
		var depth2Action = function($obj) {
			if(bg_gnbState) h = 60;
			else h = 0;

			$obj.stop().addClass("on").animate({"opacity":1},400);
			$bg_gnb.stop().animate({"height":h},400);
		};

		$gnb.find(".depth_1").each(function(index,item){
			$(item).mouseenter(function(){
				if($(item).is(".li_1") || $(item).is(".li_3") || $(item).is(".li_6")){
					bg_gnbState = false;
				}	
				else{
					bg_gnbState = true;
				}
				depth2Action($(item).find(".depth_2"));
				$(this).children("a").addClass("active");
			}).mouseleave(function(){
				$(this).children("a").removeClass("active");
				$bg_gnb.stop().animate({"height":0},400);
				$(item).find(".depth_2").stop().animate({"opacity":0},0,function(){
					$(this).removeClass("on");
				});
			}).focusin(function(){
				$(item).trigger("mouseenter");
			}).focusout(function(){
				$(item).trigger("mouseleave");
			});
		});
	};
	gnb_dropdown();


	function header_on() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 0 || !$(".header_area").hasClass("h_on")) {
				$(".header_area").addClass("h_on");
			} else if ($(window).scrollTop() === 0 && $(".header_area").hasClass("h_on")) {
				$(".header_area").removeClass("h_on");
			}
		})
	}
	header_on();

	// bg헤더 border-bottom
    $(".gnb .depth_1 a").mouseenter(function(){
    	if($(this).next().hasClass("depth_2")){
        	$(".bg_header").addClass("on");
    	}
    });
    $(".gnb").mouseleave(function(){
        $(".bg_header").removeClass("on");
    });   


	$(".form_wrap dl dd input, .form_wrap dl dd textarea").focus(function(){
		$(this).next("label.placeholder").hide();
	}).blur(function(){
		if($(this).val() == ""){
			$(this).next("label.placeholder").show();
		}
	});


	//개인정보 처리방침 책갈피 기능
	$(".privacy .personal_top .tit_ul").find("a").click(function() {
		var link = $(this).attr("href");
		if($(".personal_top ul").hasClass("tit_ul")) {
			$("html,body").stop().animate({scrollTop:$(link).offset().top - 76}, 500);
		}
	});


    // 탑버튼
    $("#btn_top").hide();
    $(window).scroll(function(){
        if ($(this).scrollTop()>100){
            $('#btn_top').fadeIn();
        }
        else{
            $('#btn_top').fadeOut();
        }
    });
    $('#btn_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        },100);
        return false;
    });


    // EST 연혁 아코디언
	$(".accordion>li:first-child .detail_wrap").show();

	$(".accordion .year").on("click", function(){
		if (!$(this).parents("li").hasClass("open")) {
			$(this).next("div").stop().slideDown(350);
			$(this).parents("li").addClass("open");	
		} else {
			$(this).parents("li").removeClass("open");	
			$(this).next("div").stop().slideUp(350);
		}
	});


	// 슬릭슬라이더
	$(".bot_slider").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
        customPaging: function(slick, index) {
            var str = ["결재봇", "도서봇", "사내 생활 Q&amp;A 봇"];
            return "<button>" + str[index] + "</button>";
        }
	});
	$(".scen_slider").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});


	// 문의하기 팝업 관련
	// 문의하기 팝업 오픈
	$(".open_cs_pop").click(function(){
		var type = "ai";
    	var selectedType = $(this).attr("data-type");
		if(selectedType) {
			type = selectedType;
		}
    $("input[name='i_type'][value=" + type + "]").prop('checked', true);
		$(".contact_pop").addClass("open");
		$("body").addClass("scrollfix");
		$(".contact_pop .btn_close").click(function(){
			$("body").removeClass("scrollfix");
			$(".contact_pop").removeClass("open");
		});
	});




	// 문의하기 팝업 폼 액션
	$(".contact_pop .move_ipt input").focus(function(){
	  $(this).parent().addClass("is-active is-completed");
	});

	$(".contact_pop .move_ipt input").focusout(function(){
	  if($(this).val() === "")
		$(this).parent().removeClass("is-completed");
	  $(this).parent().removeClass("is-active");
	})

	//파일 업로드 버튼
	// $("input[type=file]").on("change", function() {
	// 	var $this = $(this),
	// 		val = $this.val();
	// 	$(".filepath").val(val);
	// });


});

// window.onload = function () {
//  $("body,html").scrollTop(1);
// }