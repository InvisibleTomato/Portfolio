document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".fade-in");
  boxes.forEach(function (box, i) {
    setTimeout(function () {
      box.classList.add("fade-active");
    }, i * 300); // 各要素を0.3秒ずつ遅らせて表示
  });
});
