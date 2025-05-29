const desktopThemeToggle = document.getElementById("Theme-toggle-desktop");
const mobileThemeToggle = document.getElementById("Theme-toggle-mobile");

const mobileThemeToggleCircle = document.getElementById(
  "mobile-theme-toggle-circle"
);
const desktopThemeToggleCircle = document.getElementById(
  "desktop-theme-toggle-circle"
);

const html = document.documentElement;

export function ToggleTheme() {
  desktopThemeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    const ToggleFlickDesktop =
      desktopThemeToggleCircle.classList.contains("mr-auto");

    if (ToggleFlickDesktop) {
      desktopThemeToggleCircle.classList.remove("mr-auto");
      desktopThemeToggleCircle.classList.add("ml-auto");
    }

    if (!ToggleFlickDesktop) {
      desktopThemeToggleCircle.classList.remove("ml-auto");
      desktopThemeToggleCircle.classList.add("mr-auto");
    }

    const ToggleFlickMobile =
      mobileThemeToggleCircle.classList.contains("mr-auto");

    if (ToggleFlickMobile) {
      mobileThemeToggleCircle.classList.remove("mr-auto");
      mobileThemeToggleCircle.classList.add("ml-auto");
    }

    if (!ToggleFlickMobile) {
      mobileThemeToggleCircle.classList.remove("ml-auto");
      mobileThemeToggleCircle.classList.add("mr-auto");
    }
  });

  mobileThemeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    const ToggleFlickMobile =
      mobileThemeToggleCircle.classList.contains("mr-auto");

    if (ToggleFlickMobile) {
      mobileThemeToggleCircle.classList.remove("mr-auto");
      mobileThemeToggleCircle.classList.add("ml-auto");
    }

    if (!ToggleFlickMobile) {
      mobileThemeToggleCircle.classList.remove("ml-auto");
      mobileThemeToggleCircle.classList.add("mr-auto");
    }

    const ToggleFlickDesktop =
      desktopThemeToggleCircle.classList.contains("mr-auto");

    if (ToggleFlickDesktop) {
      desktopThemeToggleCircle.classList.remove("mr-auto");
      desktopThemeToggleCircle.classList.add("ml-auto");
    }

    if (!ToggleFlickDesktop) {
      desktopThemeToggleCircle.classList.remove("ml-auto");
      desktopThemeToggleCircle.classList.add("mr-auto");
    }
  });
}
