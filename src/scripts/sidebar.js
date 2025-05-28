const wrapper = document.getElementById("wrapper");
const nav = document.getElementById("nav");
const closeSidebarBtn = document.getElementById("Close-sidebar-button");
const body = document.getElementById("body");
const outerContainer = document.getElementById("outer-container");

export function toggleSidebar() {
  const isHidden = nav.classList.contains("md:hidden");

  if (isHidden) {
    nav.classList.remove("md:hidden");
    wrapper.classList.remove("md:hidden");

    body.classList.remove("md:grid-cols-1");
    body.classList.add("md:grid-cols-[200px_3fr]", "lg:grid-cols-[300px_3fr]");

    outerContainer.classList.add("md:col-start-2", "md:col-end-3");

    closeSidebarBtn.innerText = " 🚫 Hide Sidebar";
    closeSidebarBtn.classList.add("lg:w-[270px]", "md:w-[180px]");

    closeSidebarBtn.classList.remove("bg-[#635FC7]");
    closeSidebarBtn.classList.add("bg-secondary-color");
  } else {
    nav.classList.add("md:hidden");
    wrapper.classList.add("md:hidden");

    body.classList.remove(
      "md:grid-cols-[200px_3fr]",
      "lg:grid-cols-[300px_3fr]"
    );
    body.classList.add("md:grid-cols-1");

    outerContainer.classList.remove("md:col-start-2", "md:col-end-3");

    closeSidebarBtn.innerText = "👀";
    closeSidebarBtn.classList.remove("lg:w-[270px]", "md:w-[180px]");
    closeSidebarBtn.classList.add("lg:w-[60px]", "md:w-[40px]");
    closeSidebarBtn.classList.remove("bg-secondary-color");
    closeSidebarBtn.classList.add("bg-[#635FC7]");
  }
}
