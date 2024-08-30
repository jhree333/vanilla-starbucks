import { Component } from "../core"
import gsap from "gsap"
import Swiper from "swiper/bundle"
import "swiper/css/bundle"
import "./Notice.css"

export default class Notice extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.className = "notice"
    }
    const noticeContainer = document.createElement("div")
    noticeContainer.className = "notice-line"
    noticeContainer.innerHTML = /*html*/ `
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="inner">
          <div class="inner__left">
            <h2>공지사항</h2>
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0)"
                    >크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a
                  >
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)">[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트</a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)"
                    >스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a
                  >
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0)">[당첨자 발표] 뉴이어 전자영수증 이벤트</a>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)" class="notice-line__more">
              <span class="material-symbols-outlined">add_circle</span>
            </a>
          </div>

          <div class="inner__right">
            <h2>스타벅스 프로모션</h2>
            <div class="toggle-promotion open">
              <div class="material-symbols-outlined">upload</div>
            </div>
          </div>
        </div>
    `
    const promotionContainer = document.createElement("div")
    promotionContainer.className = "promotion"
    promotionContainer.innerHTML = /*html*/ `
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="./images/promotion_slide1.jpg"
                alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
              />
              <a href="javascript:void(0)" class="btn">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img
                src="./images/promotion_slide2.jpg"
                alt="기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다."
              />
              <a href="javascript:void(0)" class="btn">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img
                src="./images/promotion_slide3.jpg"
                alt="뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1) 쿠폰을 드립니다."
              />
              <a href="javascript:void(0)" class="btn">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img
                src="./images/promotion_slide4.jpg"
                alt="신년 MD 상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다."
              />
              <a href="javascript:void(0)" class="btn">자세히 보기</a>
            </div>
            <div class="swiper-slide">
              <img
                src="./images/promotion_slide5.jpg"
                alt="2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!"
              />
              <a href="javascript:void(0)" class="btn">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-prev">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <div class="swiper-next">
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
    `
    this.el.append(noticeContainer, promotionContainer)
    setTimeout(() => {
      this.applyFadeInAnimation(noticeContainer)
      this.initializeSwipers()
      this.initializeToggle()
    }, 0)
  }
  private applyFadeInAnimation(container: HTMLElement) {
    const fadeEls = container.querySelectorAll(".fade-in")
    fadeEls.forEach((fadeEl, index) => {
      gsap.to(fadeEl, {
        delay: (index + 1) * 0.7,
        opacity: 1,
        duration: 1,
      })
    })
  }
  private initializeSwipers() {
    new Swiper(".notice-line .swiper", {
      direction: "vertical",
      autoplay: true,
      loop: true,
    })

    new Swiper(".promotion .swiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
      },
    })
  }
  private initializeToggle() {
    const promotionEl = document.querySelector(".promotion") as HTMLElement
    const promotionToggleBtn = document.querySelector(".toggle-promotion") as HTMLElement
    let isHidePromotion = false

    if (promotionEl && promotionToggleBtn) {
      promotionToggleBtn.addEventListener("click", () => {
        isHidePromotion = !isHidePromotion
        if (isHidePromotion) {
          promotionEl.classList.add("hide")
        } else {
          promotionEl.classList.remove("hide")
        }
      })
    }
  }
}
