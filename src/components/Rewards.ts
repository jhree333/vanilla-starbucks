import { Component } from "../core"
import "./Rewards.css"

export default class Rewards extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.className = "rewards"

      this.el.innerHTML = /*html*/ `
      <div class="bg-left"></div>
      <div class="bg-right"></div>
      <div class="inner">
        <div class="btn-group">
          <div class="btn btn--reverse sign-up">회원가입</div>
          <div class="btn sign-in">로그인</div>
          <div class="btn gift">e-Gift 선물하기</div>
        </div>
      </div>
    `
    }
  }
}
