import { Component } from "../core"
import { initScrollSpy } from "../utils/scroll"
import "./FindStore.css"

export default class FindStore extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("find-store")
      this.el.classList.add("scroll-spy")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
        <img src="./images/find_store_texture1.png" alt="" class="texture1" />
        <img src="./images/find_store_texture2.png" alt="" class="texture2" />
        <img
          src="./images/find_store_picture1.jpg"
          alt=""
          class="picture picture1 back-to-position to-right delay-0"
        />
        <img
          src="./images/find_store_picture2.jpg"
          alt=""
          class="picture picture2 back-to-position to-right delay-1"
        />
        <div class="text-group">
          <img
            src="./images/find_store_text1.png"
            alt="스타벅스를 가까이에서 경험해보세요."
            class="title back-to-position to-left delay-0"
          />
          <img
            src="./images/find_store_text2.png"
            alt="고객님과 가장 가까이 있는 매장을 찾아보세요!"
            class="description back-to-position to-left delay-1"
          />
          <div class="more back-to-position to-left delay-2">
            <a href="javascript:void(0)" class="btn">매장찾기</a>
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
