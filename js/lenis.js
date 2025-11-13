// lenis.js

// Lenisの初期化
const lenis = new Lenis({
  duration: 1.2, // 慣性の強さ（1.0〜2.0で調整）
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 滑らかに減速
  smoothWheel: true, // ホイールスクロールに適用
  smoothTouch: false, // モバイルでは無効（必要に応じてtrue）
});

// スクロールイベント監視（任意）
lenis.on("scroll", (e) => {
  // console.log(e);
});

// アニメーションループ
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
