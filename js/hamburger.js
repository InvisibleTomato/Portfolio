// DOMが完全に読み込まれた後に実行
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  // 要素の取得
  const hamburger = document.querySelector(".hamburger");
  const navigation = document.querySelector(".navigation");
  const cursor = document.querySelector(".cursor");

  // すべての要素が存在する場合のみイベントを設定
  if (hamburger && navigation && cursor) {
    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      if (!isExpanded) {
        // メニューを開く
        this.setAttribute("aria-expanded", "true");
        navigation.classList.add("is-active");

        // カーソルを前面に出す（クラスとz-indexの両方を設定）
        cursor.classList.add("cursor-is-active");
        // 直接スタイルも設定（確実に適用するため）
        setTimeout(() => {
          cursor.style.zIndex = "1500";
          cursor.style.pointerEvents = "none";
        }, 10);
      } else {
        // メニューを閉じる
        this.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-active");

        // カーソルを元の位置に戻す
        cursor.classList.remove("cursor-is-active");
        // 直接スタイルも設定（確実に適用するため）
        setTimeout(() => {
          cursor.style.zIndex = "-1000";
        }, 10);
      }
    });

    // ハンバーガーメニューのホバーイベント
    hamburger.addEventListener("mouseover", function () {
      cursor.classList.add("cursor--hover");
    });

    hamburger.addEventListener("mouseout", function () {
      cursor.classList.remove("cursor--hover");
    });

    // ナビゲーションリンクのホバーイベント
    const navigationLinks = document.querySelectorAll(".navigation__list a");
    navigationLinks.forEach(function (link) {
      link.addEventListener("mouseover", function () {
        cursor.classList.add("cursor--hover");
      });

      link.addEventListener("mouseout", function () {
        cursor.classList.remove("cursor--hover");
      });
    });
  }
});
