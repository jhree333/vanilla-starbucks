import { Component } from "../core"
import { initScrollSpy } from "../utils/scroll"
import "./PickYourFavorite.css"

export default class PickYourFavorite extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("pick-your-favorite")
      this.el.classList.add("scroll-spy")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <div class="text-group">
          <img
            src="./images/favorite_text1.png"
            alt="PICK YOUR FAVORITE"
            class="title back-to-position to-right delay-0"
          />
          <img
            src="./images/favorite_text2.png"
            alt="다양한 메뉴를 스타벅스에서 즐겨보세요."
            class="description back-to-position to-right delay-1"
          />
          <div class="more back-to-position to-right delay-2">
            <a href="javascript:void(0)" class="btn btn--white">자세히 보기</a>
          </div>
        </div>
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
