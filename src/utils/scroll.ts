// utils/scroll.ts
import gsap from "gsap"
import _ from "lodash"
import ScrollMagic from "scrollmagic"

interface ScrollEventOptions {
  threshold: number // 스크롤 위치 임계값
  duration: number // 애니메이션 지속 시간
}

interface ElementAnimation {
  element: HTMLElement
  showAnimation: gsap.TweenVars // 요소가 보여질 때의 애니메이션 옵션
  hideAnimation: gsap.TweenVars // 요소가 숨겨질 때의 애니메이션 옵션
}

export function setupScrollEvent(
  elements: ElementAnimation[],
  options: ScrollEventOptions = { threshold: 500, duration: 0.6 }
): void {
  window.addEventListener(
    "scroll",
    _.throttle(() => {
      elements.forEach(({ element, showAnimation, hideAnimation }) => {
        if (window.scrollY > options.threshold) {
          gsap.to(element, { duration: options.duration, ...hideAnimation })
        } else {
          gsap.to(element, { duration: options.duration, ...showAnimation })
        }
      })
    }, 300)
  )
}

export function initScrollSpy() {
  const spyEls = document.querySelectorAll("section.scroll-spy")
  spyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
    })
      .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
      .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
  })
}
