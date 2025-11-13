document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".fade-in-loading");
  boxes.forEach(function (box, i) {
    setTimeout(function () {
      box.classList.add("fade-active-loading");
    }, i * 300); // 各要素を0.3秒ずつ遅らせて表示
  });
});
