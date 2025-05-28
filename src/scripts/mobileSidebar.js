const iconButton = document.getElementById("icon-button");
const mobileModal = document.getElementById("mobile-modal");
const closeMobileModal = document.getElementById("close-mobile-modal");

export function mobileSidebar() {
  iconButton.addEventListener("click", () => {
    mobileModal.classList.remove("hidden");
  });

  closeMobileModal.addEventListener("click", () => {
    mobileModal.classList.add("hidden");
  });
}
