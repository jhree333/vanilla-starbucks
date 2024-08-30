import { Component } from "../core"
import { initScrollSpy } from "../utils/scroll"
import "./ReserveCoffee.css"

export default class ReserveCoffee extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("reserve-coffee")
      this.el.classList.add("scroll-spy")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <img
          src="./images/reserve_logo.png"
          alt=""
          class="reserve-logo back-to-position to-right delay-0"
        />
        <div class="text-group">
          <img
            src="./images/reserve_text.png"
            alt=""
            class="description back-to-position to-right delay-1"
          />
          <div class="more back-to-position to-right delay-2">
            <a href="javascript:void(0)" class="btn btn--gold">자세히 보기</a>
          </div>
        </div>
        <img
          src="./images/reserve_image.png"
          alt=""
          class="product back-to-position to-left delay-3"
        />
    `
    this.el.append(container)
    setTimeout(() => {
      this.initializeScrollSpy()
    })
  }
  private initializeScrollSpy() {
    initScrollSpy()
  }
}
