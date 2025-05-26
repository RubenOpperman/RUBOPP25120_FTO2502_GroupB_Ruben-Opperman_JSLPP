export function renderDoneTasks(tasks, container, openModal) {
  tasks.forEach((task) => {
    if (task.status === "done") {
      const doneTask = document.createElement("div");
      doneTask.innerText = task.title;
      doneTask.classList.add(
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
      doneTask.addEventListener("click", () => openModal(task));
      container.appendChild(doneTask);
    }
  });
}
