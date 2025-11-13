window.addEventListener("scroll", function () {
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // すべての.fade-inを取得
  const boxes = document.querySelectorAll(".fade-in");

  boxes.forEach(function (box) {
    // fade-inまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけfade-inにfade-activeクラスを付与する
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("fade-active");
    }
  });
});
