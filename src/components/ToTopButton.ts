import { Component } from "../core"
import { setupScrollEvent } from "../utils/scroll"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import "./ToTopButton.css"

gsap.registerPlugin(ScrollToPlugin)

export default class ToTopButton extends Component {
  constructor() {
    super({ tagName: "div" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.id = "to-top"
      this.el.innerHTML = /*html*/ `
      <div class="material-symbols-outlined">arrow_upward</div>
      `
    }
    setTimeout(() => {
      this.setupScrollEventForTop()
      this.addClickEventToTopButton()
    }, 0)
  }
  private setupScrollEventForTop() {
    const toTopEl = document.querySelector("#to-top") as HTMLElement
    setTimeout(() => {
      setupScrollEvent(
        [
          {
            element: toTopEl,
            hideAnimation: { x: 0 },
            showAnimation: { x: 100 },
          },
        ],
        { threshold: 500, duration: 0.2 }
      )
    })
  }
  private addClickEventToTopButton() {
    const toTopEl = this.el as HTMLElement
    toTopEl.addEventListener("click", this.scrollToTop)
  }

  // 최상단으로 스크롤하는 메소드
  private scrollToTop() {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: 0,
    })
  }
}
