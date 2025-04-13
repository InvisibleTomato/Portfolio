// カスタムカーソルの設定

const cursor = document.querySelector(".cursor");

// ページごとのカーソル表示制御
const currentPage = window.location.pathname;
const specialPages = ["/profile.html", "/gallery-list.html"];

if (specialPages.some((page) => currentPage.includes(page))) {
  cursor.style.width = "24px";
  cursor.style.height = "24px";
  cursor.style.top = "-12px";
  cursor.style.left = "-12px";
  cursor.style.background = "transparent";
}

//cursor用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// タッチデバイス対応：タッチ操作でカーソルを動かす
document.addEventListener("touchstart", handleTouch);
document.addEventListener("touchmove", handleTouch);

// タッチイベント処理関数
function handleTouch(e) {
  // デフォルトのスクロール動作を防止（必要に応じてコメントアウト）
  // e.preventDefault();

  // タッチ位置を取得
  const touch = e.touches[0];

  // カーソル位置を更新
  cursor.style.transform = `translate(${touch.clientX}px, ${touch.clientY}px)`;

  // タッチ中はカーソルを表示状態に
  cursor.style.opacity = "1";

  // タッチ中はカーソルを最前面に表示
  cursor.style.zIndex = "1100";
}

// タッチ終了時の処理
document.addEventListener("touchend", function () {
  // 必要に応じてカーソルの状態を変更
  // cursor.style.opacity = "0"; // タッチ終了時にカーソルを非表示にする場合
});

// リンクにマウスオーバーしたらカーソルを変更
const interactiveElements = document.querySelectorAll("a,img");

interactiveElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    cursor.classList.add("cursor--hover", "cursor-is-active");
  });

  element.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--hover", "cursor-is-active");
  });
});

//カーソルがimgにhoverしたらz-indexを1100に
const interactiveElementsImg = document.querySelectorAll("img");

interactiveElementsImg.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-img-hover");
  });
  element.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-img-hover");
  });
});

//h1にホバーした時にカラーを$whiteに変更
const h1HoverElements = document.querySelectorAll("h1");

h1HoverElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    // 特定のページではh1ホバー効果を適用しない
    if (!specialPages.some((page) => currentPage.includes(page))) {
      this.classList.add("h1--hover");
    }
  });

  element.addEventListener("mouseout", function () {
    this.classList.remove("h1--hover");
  });
});
