import { Component } from "../core"
import gsap from "gsap"
import "./Visual.css"

export default class Visual extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.className = "visual"
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <div class="title fade-in">
          <img src="./images/visual_title.png" alt="STARBUCKS DELIGHTFUL START TO THE YEARS" />
          <a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
        </div>
        <div class="fade-in">
          <img src="./images/visual_cup1.png" alt="new OATMEAL LATTE" class="cup1 image" />
          <img src="./images/visual_cup1_text.png" alt="오트밀 라떼" class="cup1 text" />
        </div>
        <div class="fade-in">
          <img
            src="./images/visual_cup2.png"
            alt="new STARBUCKS CARAMEL CRUMBLE MOCHA"
            class="cup2 image"
          />
          <img
            src="./images/visual_cup2_text.png"
            alt="스타벅스 카라멜 크럼블 모카"
            class="cup2 text"
          />
        </div>
        <div class="fade-in">
          <img src="./images/visual_spoon.png" alt="Spoon" class="spoon" />
        </div>
    `
    this.el.append(container)
    this.applyFadeInAnimation(container)
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
}
