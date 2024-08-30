import { Component } from "../core"
import Login from "../components/Login"

export default class Home extends Component {
  constructor() {
    super({
      tagName: "div",
    })
  }
  render() {
    const theLogin = new Login().el

    if (this.el instanceof HTMLElement) {
      this.el.classList.add("container")
    }

    this.el.append(theLogin)
  }
}
