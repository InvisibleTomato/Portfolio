// カスタムカーソルの設定

const cursor = document.querySelector(".cursor");

//cursor用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// リンクにマウスオーバーしたらカーソルを変更
const links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function () {
    cursor.classList.add("cursor--hover");
    cursor.style.zIndex = "-1"; // カーソルを背面に
  });

  links[i].addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--hover");
    cursor.style.zIndex = "1000"; // カーソルを元のz-indexに戻す
  });
}

// hover-whiteクラスにカーソルがホバーした時の処理
const hoverWhiteElements = document.querySelectorAll(".hover-white");

hoverWhiteElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.style.color = "#fdfdfd"; // テキストを白に
    this.style.transition = "color 0.3s"; // 色の変化を滑らかに
    cursor.style.zIndex = "-1"; // カーソルを背面に
  });

  element.addEventListener("mouseout", function () {
    this.style.color = "#0e0e0e"; // テキストを黒に戻す
    cursor.classList.remove("cursor--hover"); // カーソルを元に戻す
    cursor.style.zIndex = "1000"; // カーソルを元のz-indexに戻す
  });
});
