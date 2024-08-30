const toTopEl = document.querySelector("#to-top")

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, {
        duration: 0.2,
        x: 0,
      })
    } else {
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, {
        duration: 0.2,
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

// new Swiper(선택자, 옵션)
