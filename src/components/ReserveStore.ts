import { Component } from "../core"
import "./ReserveStore.css"

export default class ReserveStore extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("reserve-store")
    }
    const container = document.createElement("div")
    container.className = "inner"
    container.innerHTML = /*html*/ `
      <div class="medal">
        <div class="front">
          <img src="./images/reserve_store_medal_front.png" alt="R" />
        </div>
        <div class="back">
          <img src="./images/reserve_store_medal_back.png" alt="스타벅스 리저브 매장" />
          <a href="javascript:void(0)" class="btn"> 매장안내 </a>
        </div>
      </div>
    `
    this.el.append(container)
  }
}
