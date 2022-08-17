$(document).ready(function () {
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function () {
			$(this).addClass("ho");
		},
		function () {
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function () {
		const x = $(this).children("img").attr("src");
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0, -4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src", zz);
		const txt = $(this).children("img").attr("alt");
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text(txt); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow", "hidden");
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function () {
		$("#popup").fadeOut();
		$("body").css("overflow", "auto");
	});

	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function () {
		//큰화면에서만, 부드럽게 스크롤이동
		if ($(window).width() > 768) {
			$("html,body").stop().animate({ scrollTop: $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		if ($("nav a")) {
			$(this).addClass("active").siblings().removeClass("active");
		}
	});

	/*//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "머무르지 않고 나아가는\n퍼블리셔 정은혜 입니다."
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 100 );
		}
	}
	type();*/

	//휴대폰에서는 상단 배경색 보임
	if ($(window).width() <= 600) {
		$("nav").addClass("act");
	} else {	//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
	}

	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if ($(window).width() > 600) {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1600) {
				$("#portfolio> section").eq(0).addClass("act");
			}
			if ($(window).scrollTop() > 2500) {
				$("#portfolio> section").eq(1).addClass("act");
			}
			if ($(window).scrollTop() > 3400) {
				$("#portfolio> section").eq(2).addClass("act");
			}
		});
	}

	/*스크롤 표시기*/
	window.onscroll = function () { myFunction() };
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	};

	/*타이핑 효과*/
	// 변수 선언
	const $txt = document.querySelector(".txt-title");
	const content = "머무르지 않고, 나아가는 :)\n퍼블리셔 정은혜 입니다.";
	let contentIndex = 0;

	// typing 함수
	let typing = function () {
		$txt.innerHTML += content[contentIndex];
		contentIndex++;
		if (content[contentIndex] === "\n") {
			$txt.innerHTML += "<br />";
			contentIndex++;
		}
		if (contentIndex > content.length) {
			$txt.textContent = "";
			contentIndex = 0;
		}
	};
	// 0.2초간격으로 typing 함수 실행
	setInterval(typing, 200);

	/*밤하늘의 별*/
	const $sky = document.querySelector(".sky");

	// 브라우저 창 크기에 따른 별 생성
	window.onresize = () => {
		makeStars();
	}

	const makeStars = () => {
		// 브라우저 가장 큰 크기
		const maxSize = Math.max(window.innerWidth, window.innerHeight)

		// 랜덤한 X 위치 값
		const getRandomX = () => Math.random() * maxSize;

		// 랜덤한 Y 위치 값
		const getRandomY = () => Math.random() * maxSize;

		// 랜덤한 크기 (circle는 반지름이 크기)
		const randomRadius = () => Math.random() * 0.7 + 0.6;

		// 임의의 값
		const _size = Math.floor(maxSize / 2);

		const htmlDummy = new Array(_size).fill().map((_, i) => {
			return `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
		}).join('');

		$sky.innerHTML = htmlDummy;
	}

	window.onload = () => {
		makeStars();
	}

	/*top scroll*/
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $(".upbtn").fadeIn();
            } else {
                $(".upbtn").fadeOut();
            }
        });
        $(".up").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 0);
            return false;
        });
        $(".down").click(function(){
            $("html, body").animate({
                scrollTop:$(document).height()
            }, 0);
        });
    });

	/*햄버거 버튼  클릭시 메뉴 나옴*/
	$(".navv button").click(function(){
		$(".navi").stop().slideToggle("slow", function(){
			if($(".navi").css("display")== "block"){
				$(".navv button").html("<i class='fa-solid fa-xmark'></i>");
			}else{
				$(".navv button").html("<i class='fa-solid fa-bars'></i>");
			}
		});
	});

});//끝









