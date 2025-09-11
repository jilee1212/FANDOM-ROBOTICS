/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });


  // navbarDropdown
	if ($(window).width() < 992) {
		$('#navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
  }
  
  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();

  // Text Slider for Video Hero
  function initTextSlider() {
    const slides = document.querySelectorAll('.text-slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      // Remove active class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Add active class to current slide and dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }

    function stopSlider() {
      clearInterval(slideInterval);
    }

    // Initialize slider
    if (slides.length > 0) {
      showSlide(0);
      startSlider();

      // Add click event listeners to dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          stopSlider();
          showSlide(index);
          startSlider();
        });
      });

    }
  }

  // Initialize text slider when DOM is ready
  $(document).ready(function() {
    initTextSlider();
  });

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  // filter
  setTimeout(function(){
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    }
    ]
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  /* ========================================================================= */
  /*	Language Switch Functionality
  /* ========================================================================= */
  // Language switch functionality
  $('.language-switch').on('click', function(e) {
    e.preventDefault();
    var targetLang = $(this).data('lang');
    var currentUrl = window.location.pathname;
    
    if (targetLang === 'en') {
      // Switch to English version
      if (currentUrl.includes('/en/')) {
        // Already in English version
        return;
      }
      var fileName = currentUrl.split('/').pop();
      if (fileName === '') fileName = 'index.html';
      window.location.href = 'en/' + fileName;
    } else if (targetLang === 'ko') {
      // Switch to Korean version
      if (!currentUrl.includes('/en/')) {
        // Already in Korean version
        return;
      }
      var fileName = currentUrl.split('/').pop();
      if (fileName === '') fileName = 'index.html';
      window.location.href = '../' + fileName;
    }
  });

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $('.navigation').addClass('sticky-header');
    } else {
      $('.navigation').removeClass('sticky-header');
    }
  });

  /* ========================================================================= */
  /*	Scroll Animation with Intersection Observer API
  /* ========================================================================= */
  
  // Intersection Observer를 사용한 스크롤 애니메이션 구현
  function initScrollAnimation() {
    // Intersection Observer 옵션 설정
    const observerOptions = {
      root: null, // 뷰포트를 root로 사용
      rootMargin: '0px 0px -50px 0px', // 요소가 50px 위에 있을 때 트리거
      threshold: 0.1 // 요소의 10%가 보일 때 트리거
    };

    // Intersection Observer 콜백 함수
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 보이면 is-visible 클래스 추가
          entry.target.classList.add('is-visible');
        }
      });
    };

    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 애니메이션 대상 요소들을 관찰 시작
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(element => {
      observer.observe(element);
    });
  }

  // DOM이 로드되면 스크롤 애니메이션 초기화
  $(document).ready(function() {
    initScrollAnimation();
    initTestimonialModal();
    initTestimonialSlider();
  });


  /* ========================================================================= */
  /*	Testimonial Slider Functionality
  /* ========================================================================= */
  
  function initTestimonialSlider() {
    if (typeof $ === 'undefined' || !$.fn.slick) {
      console.log('jQuery or Slick Slider not loaded');
      return;
    }
    
    // Testimonial Slider
    $('#testimonialSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: false,
      pauseOnFocus: false,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200, // For smaller desktops
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,  // For tablets
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  /* ========================================================================= */
  /*	Testimonial Modal Functionality
  /* ========================================================================= */
  
  // Testimonial 데이터 (한국어)
  const testimonials = {
    1: {
      fullText: "정말 대단하네요! 우리 회사가 NFT 마켓플레이스를 런칭할 때 Fandom Robotics가 도와줬는데, 생각보다 훨씬 빨리 완성됐어요. 기술적인 부분은 전혀 몰랐는데 설명도 잘해주시고, 복잡한 스마트 컨트랙트도 쉽게 이해할 수 있게 도와주셨어요. 특히 보안 부분에서 정말 신경 써주시더라고요. 지금은 안정적으로 운영되고 있고, 사용자들도 만족해하고 있어요. 정말 추천하고 싶은 팀입니다!",
      name: "김*철",
      position: "CEO, 테크스타트업"
    },
    2: {
      fullText: "처음엔 블록체인이 뭔지도 모르고 걱정이 많았는데, Fandom Robotics 팀이 차근차근 알려주시더라고요. 토큰 경제 설계부터 상장까지 모든 과정을 도와주셨고, 특히 커뮤니티 관리와 마케팅 전략까지 조언해주셨어요. 지금은 우리 토큰이 상장까지 됐고, 가격도 안정적으로 유지되고 있어요! 정말 감사하고, 다음 프로젝트도 꼭 함께하고 싶어요.",
      name: "박*영",
      position: "CTO, 블록체인 스타트업"
    },
    3: {
      fullText: "AI 트레이딩 봇을 만들어달라고 했는데, 정말 놀라운 결과가 나왔어요. 수익률이 기대했던 것보다 훨씬 좋고, 리스크 관리도 완벽하게 해주시네요. 특히 시장 변동성에 대응하는 알고리즘이 정말 똑똑해요. 24시간 모니터링 없이도 안정적으로 작동하고, 수익도 계속 나고 있어요. 강력 추천합니다! AI 기술의 진짜 파워를 느낄 수 있었어요.",
      name: "이*호",
      position: "대표이사, AI 솔루션 기업"
    },
    4: {
      fullText: "DEX 개발 프로젝트를 맡겼는데, 정말 전문적이에요. 코드도 깔끔하고 보안도 탄탄하게 해주시고, 가스비 최적화까지 완벽하게 해주셨어요. 우리 팀도 개발 과정에서 많이 배웠어요. 특히 DeFi 프로토콜의 복잡한 로직을 이해하기 쉽게 설명해주시고, 실제 테스트넷에서 검증까지 완벽하게 해주셨어요. 다음에도 꼭 함께하고 싶습니다!",
      name: "최*수",
      position: "개발팀장, DeFi 프로젝트"
    },
    5: {
      fullText: "웹사이트부터 블록체인까지 원스톱으로 해결해주시네요. 특히 반응형 디자인이 정말 마음에 들어요. 모바일에서도 완벽하게 작동하고, 로딩 속도도 엄청 빨라요! 사용자 경험도 정말 좋아졌고, 전환율도 크게 향상됐어요. 마케팅 관점에서도 정말 만족스러운 결과였어요. 기술력과 디자인 감각이 모두 뛰어난 팀입니다!",
      name: "정*민",
      position: "마케팅 디렉터, 크리에이티브 에이전시"
    }
  };

  // Testimonial 데이터 (영어)
  const testimonialsEn = {
    1: {
      fullText: "This is really amazing! When our company launched an NFT marketplace, Fandom Robotics helped us, and it was completed much faster than we thought. We didn't know anything about technical aspects, but they explained everything well and helped us understand complex smart contracts easily. They were especially careful about security. Now it's running stably and users are satisfied too. I really want to recommend this team!",
      name: "Kim * Chul",
      position: "CEO, Tech Startup"
    },
    2: {
      fullText: "At first, I didn't even know what blockchain was and had many worries, but the Fandom Robotics team taught us step by step. They helped us with everything from token economy design to listing, and even advised us on community management and marketing strategies. Now our token has been listed and the price is maintained stably! I'm really grateful and want to work together on the next project too.",
      name: "Park * Young",
      position: "CTO, Blockchain Startup"
    },
    3: {
      fullText: "I asked them to create an AI trading bot, and the results were really amazing. The returns were much better than expected, and they handled risk management perfectly. Especially the algorithm that responds to market volatility is really smart. It works stably without 24-hour monitoring, and profits keep coming. I strongly recommend them! I could feel the real power of AI technology.",
      name: "Lee * Ho",
      position: "CEO, AI Solution Company"
    },
    4: {
      fullText: "We entrusted them with a DEX development project, and they were really professional. The code was clean, security was solid, and they even perfectly optimized gas fees. Our team also learned a lot during the development process. They especially explained the complex logic of DeFi protocols in an easy-to-understand way and perfectly verified everything on the testnet. I definitely want to work together again!",
      name: "Choi * Su",
      position: "Development Team Lead, DeFi Project"
    },
    5: {
      fullText: "They solve everything from websites to blockchain in one stop. I especially love the responsive design. It works perfectly on mobile too, and the loading speed is incredibly fast! The user experience has really improved, and the conversion rate has increased significantly. From a marketing perspective, it was a really satisfying result. They are a team with both excellent technical skills and design sense!",
      name: "Jung * Min",
      position: "Marketing Director, Creative Agency"
    }
  };

  // Testimonial 모달 초기화
  function initTestimonialModal() {
    const modal = document.getElementById('testimonialModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal) return;

    // 모든 testimonial 카드에 클릭 이벤트 추가
    document.addEventListener('click', function(e) {
      // 자세히 보기 버튼 클릭
      if (e.target.classList.contains('read-more-btn')) {
        const testimonialCard = e.target.closest('.testimonial-card');
        if (testimonialCard) {
          const testimonialId = testimonialCard.getAttribute('data-testimonial');
          if (testimonialId) {
            showTestimonialModal(testimonialId);
          }
        }
      }
      // 카드 전체 클릭 (버튼 제외)
      else if (e.target.closest('.testimonial-card') && !e.target.classList.contains('read-more-btn')) {
        const testimonialCard = e.target.closest('.testimonial-card');
        if (testimonialCard) {
          const testimonialId = testimonialCard.getAttribute('data-testimonial');
          if (testimonialId) {
            showTestimonialModal(testimonialId);
          }
        }
      }
    });

    // 모달 닫기
    if (closeBtn) {
      closeBtn.addEventListener('click', closeTestimonialModal);
    }

    // 모달 배경 클릭으로 닫기
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeTestimonialModal();
      }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeTestimonialModal();
      }
    });
  }

  // 모달 열기
  function showTestimonialModal(testimonialId) {
    const modal = document.getElementById('testimonialModal');
    
    // 언어 감지 - 영어 페이지인지 확인
    const isEnglish = window.location.pathname.includes('/en/');
    
    const testimonialData = isEnglish ? testimonialsEn : testimonials;
    const testimonial = testimonialData[testimonialId];
    
    if (testimonial) {
      document.querySelector('.full-testimonial').textContent = testimonial.fullText;
      document.querySelector('.client-name').textContent = testimonial.name;
      document.querySelector('.client-position').textContent = testimonial.position;
      
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
  }

  // 모달 닫기
  function closeTestimonialModal() {
    const modal = document.getElementById('testimonialModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 스크롤 복원
  }


})(jQuery);
