import { Component } from "../core"
import Swiper from "swiper/bundle"
import "swiper/css/bundle"
import "./Awards.css"

export default class Awards extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("awards")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/awards_slide1.jpg" alt="대통령 표창" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide2.jpg" alt="대통령 표창 (3년 연속)" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide3.jpg" alt="우수사업주 인증" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide4.jpg" alt="경연대회 대상" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide5.jpg" alt="대한상의회장상" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide6.jpg" alt="기업사회공헌 활동 부문" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide7.jpg" alt="KSI 1위 (5년 연속)" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide8.jpg" alt="KS-SQI 1위 (5년 연속)" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide9.jpg" alt="커피전문점 부문 (4년 연속)" />
            </div>
            <div class="swiper-slide">
              <img src="./images/awards_slide10.jpg" alt="동반성장 부문 (4년 연속)" />
            </div>
          </div>
        </div>

        <div class="swiper-prev">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <div class="swiper-next">
          <span class="material-symbols-outlined">arrow_forward</span>
        </div>
    `
    this.el.append(container)
    setTimeout(() => {
      this.initializeSwipers()
    }, 0)
  }
  private initializeSwipers() {
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
  }
}
