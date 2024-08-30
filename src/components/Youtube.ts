import { Component } from "../core"
import "./Youtube.css"
import { floatingObject } from "../utils/floating"

// `window` 객체에 `onYouTubeIframeAPIReady` 메서드를 선언합니다.
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
  }
  interface YT {
    Player: any // 간단히 any로 선언하거나, 필요한 경우 정확한 타입 정의를 추가할 수 있습니다.
  }
}

export default class Youtube extends Component {
  constructor() {
    super({ tagName: "section" })
  }

  render() {
    if (this.el instanceof HTMLElement) {
      this.el.className = "youtube"

      this.el.innerHTML = /*html*/ `
        <div class="youtube__area">
          <div id="player"></div>
        </div>
        <div class="youtube__cover"></div>
        <div class="inner">
          <img src="./images/floating1.png" alt="Icon" class="floating floating1" />
          <img src="./images/floating2.png" alt="Icon" class="floating floating2" />
        </div>
    `
    }
    setTimeout(() => {
      this.initializeFloatingObjects()
      this.loadYouTubeAPI()
    })
  }
  private initializeFloatingObjects() {
    floatingObject(".floating1", 1, 15)
    floatingObject(".floating2", 0.5, 15)
  }
  private loadYouTubeAPI() {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    }

    // 전역 함수로 등록 (YouTube IFrame API에서 호출)
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this)
  }

  private onYouTubeIframeAPIReady() {
    const playerElement = document.getElementById("player")
    if (playerElement) {
      new YT.Player(playerElement, {
        videoId: "An6LvWQuj_8",
        playerVars: {
          autoplay: 1, // true 대신 1 사용
          loop: 1, // true 대신 1 사용
          playlist: "An6LvWQuj_8",
        },
        events: {
          onReady: function (event) {
            event.target.mute()
          },
        },
      })
    } else {
      console.error("Player element not found")
    }
  }
}
