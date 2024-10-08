import { Component } from "../core"
import "./Login.css"

export default class SignIn extends Component {
  render() {
    const container = document.createElement("div")
    container.className = "signin"

    container.innerHTML = `
      <h1>로그인</h1>
      <div class="signin__card">
        <h2><strong>Welcome!</strong> 스타벅스에 오신 것을 환영합니다.</h2>
        <form>
          <input type="text" placeholder="아이디를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="submit" value="로그인" />
          <p>
            * 비밀번호를 타 사이트와 같이 사용할 경우 도용 위험이 있으니,<br />
            정기적으로 비밀번호를 변경하세요!
          </p>
        </form>
        <div class="actions">
          <a href="javascript:void(0)">회원가입</a>
          <a href="javascript:void(0)">아이디 찾기</a>
          <a href="javascript:void(0)">비밀번호 찾기</a>
        </div>
      </div>
    `

    this.el.append(container)
  }
}
