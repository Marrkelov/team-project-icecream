(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredient-modal-open]"),
    closeModalBtn: document.querySelector("[ingredient-modal-close]"),
    modal: document.querySelector("[ingredient-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
