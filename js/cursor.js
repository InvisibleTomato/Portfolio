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
  });

  links[i].addEventListener("mouseout", function () {
    cursor.classList.remove("cursor--hover");
  });
}
