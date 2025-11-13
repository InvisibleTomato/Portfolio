document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const box = entry.target;

          // すでにアクティブならスキップ（二重発火防止）
          if (!box.classList.contains("fade-active")) {
            // 画面に入った要素たちを対象に、時間差をつけてフェード
            setTimeout(() => {
              box.classList.add("fade-active");
            }, index * 300); // グループ内で0.3秒ずつずらす
          }

          // 一度表示された要素は監視解除（パフォーマンス向上）
          observer.unobserve(box);
        }
      });
    },
    {
      threshold: 0.1, // 要素の20%が見えたら発火
    }
  );

  boxes.forEach((box) => observer.observe(box));
});
