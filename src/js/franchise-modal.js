(() => {
  const refs = {
    openModalBtn: document.querySelector("[franchise-modal-open]"),
    closeModalBtn: document.querySelector("[franchise-modal-close]"),
    modal: document.querySelector("[franchise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
