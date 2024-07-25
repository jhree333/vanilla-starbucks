const searchEl = document.querySelector(".search")
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", () => {
  searchInputEl.focus()
})

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused")
  searchInputEl.setAttribute("placeholder", "통합검색")
})

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused")
  searchInputEl.setAttribute("placeholder", "")
})

const badgeEl = document.querySelector("header .badges")
const toTopEl = document.querySelector("#to-top")

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소,지속시간,옵션)
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" })

      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      })
    } else {
      // 배지 보이기
      // gsap.to(요소,지속시간,옵션)
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" })

      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      })
    }
  }, 300)
)

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener("click", function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, 0.7, {
    scrollTo: 0,
  })
})

// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  })
})

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
})

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
})

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
})

const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add("hide")
  } else {
    // 보임 처리!
    promotionEl.classList.remove("hide")
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      y: size,
      repeat: -1, // -1은 무한 반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, // Easing 함수 적용
      delay: random(0, delay),
    }
  )
}
floatingObject(".floating1", 1, 15)
floatingObject(".floating2", 0.5, 15)
floatingObject(".floating3", 1.5, 20)

const spyEls = document.querySelectorAll("section.scroll-spy")
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector(".this-year")
thisYear.textContent = new Date().getFullYear()
