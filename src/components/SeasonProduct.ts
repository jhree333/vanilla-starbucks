import { Component } from "../core"
import "./SeasonProduct.css"
import { floatingObject } from "../utils/floating"
import { initScrollSpy } from "../utils/scroll"

export default class SeasonProduct extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("season-product")
      this.el.classList.add("scroll-spy")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <img src="./images/floating3.png" alt="Icon" class="floating floating3" />
        <img
          src="./images/season_product_image.png"
          alt="아이스 커피 블렌드"
          class="product back-to-position to-right delay-0"
        />

        <div class="text-group">
          <img
            src="./images/season_product_text1.png"
            alt="상쾌하게 여름을 반겨줄 시즌 원두 아이스 커피 블렌드"
            class="title back-to-position to-left delay-1"
          />
          <img
            src="./images/season_product_text2.png"
            alt="아프리카와 라틴 아메리카 커피의 브렌드로 시트러스함과 은은한 캐러멜 향을 동시에 느낄 수 있으며, 차갑게 즐길 때 풍미가 더욱 깊어지는 원두입니다."
            class="description back-to-position to-left delay-2"
          />
          <div class="more back-to-position to-left delay-3">
            <a href="javascript:void(0)" class="btn">자세히 보기</a>
          </div>
        </div>
    `
    this.el.append(container)
    setTimeout(() => {
      this.initializeFloatingObjects()
      this.initializeScrollSpy()
    })
  }
  private initializeFloatingObjects() {
    floatingObject(".floating3", 1.5, 20)
  }
  private initializeScrollSpy() {
    initScrollSpy()
  }
}
