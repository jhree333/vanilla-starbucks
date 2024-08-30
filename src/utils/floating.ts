import gsap from "gsap"

export function random(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

export function floatingObject(selector: string, delay: number, size: number): void {
  gsap.to(selector, {
    duration: random(1.5, 2.5),
    y: size,
    repeat: -1, // -1은 무한 반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
    ease: "Power1.easeInOut", // Easing 함수 적용
    delay: random(0, delay),
  })
}
