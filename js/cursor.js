// カスタムカーソルの設定

const cursor = document.querySelector(".cursor");

//cursor用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// リンクにマウスオーバーしたらカーソルを変更
const interactiveElements = document.querySelectorAll("a");

interactiveElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    cursor.classList.add("cursor--hover");
  });

  element.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--hover");
  });
});

//h1にホバーした時にカラーを$whiteに変更
const h1HoverElements = document.querySelectorAll("h1");

h1HoverElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.classList.add("h1--hover");
  });

  element.addEventListener("mouseout", function () {
    this.classList.remove("h1--hover");
  });
});
