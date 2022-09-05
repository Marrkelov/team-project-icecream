(() => {
  const refs = {
    openModalBtn: document.querySelector("[by-now-modal-open]"),
    closeModalBtn: document.querySelector("[by-now-modal-close]"),
    modal: document.querySelector("[by-now-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
