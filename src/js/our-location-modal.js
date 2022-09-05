(() => {
  const refs = {
    openModalBtn: document.querySelector("[our-location-modal-open]"),
    closeModalBtn: document.querySelector("[our-location-modal-close]"),
    modal: document.querySelector("[our-location-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
