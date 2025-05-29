const iconButton = document.getElementById("icon-button");
const mobileModal = document.getElementById("mobile-modal");
const closeMobileModal = document.getElementById("close-mobile-modal");

/**
 * This function toggles the appearance of the mobile sidebar where you can change the theme.
 */
export function mobileSidebar() {
  iconButton.addEventListener("click", () => {
    mobileModal.classList.remove("hidden");
  });

  closeMobileModal.addEventListener("click", () => {
    mobileModal.classList.add("hidden");
  });
}
