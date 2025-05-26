export function renderDoingTasks(tasks, container, openModal) {
  tasks.forEach((task) => {
    if (task.status === "doing") {
      const doingTask = document.createElement("div");
      doingTask.innerText = task.title;
      doingTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      doingTask.addEventListener("click", () => openModal(task));
      container.appendChild(doingTask);
    }
  });
}
