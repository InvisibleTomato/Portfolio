document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".js-modal");
  const modalImg = document.querySelector(".js-modal-img");
  const openImgs = document.querySelectorAll(".js-modal-open");

  openImgs.forEach((img) => {
    console.log("data-modal-img:", img.dataset.modalImg); // デバッグ用

    img.addEventListener("click", () => {
      const targetSrc = img.dataset.modalImg;
      if (!targetSrc) {
        console.error("モーダル用画像のパスが取得できません");
        return;
      }
      modalImg.src = targetSrc;
      modal.classList.add("is-active");
    });
  });

  // 外側クリックで閉じる
  modal.addEventListener("click", () => {
    modal.classList.remove("is-active");
    modalImg.src = "";
  });
});
