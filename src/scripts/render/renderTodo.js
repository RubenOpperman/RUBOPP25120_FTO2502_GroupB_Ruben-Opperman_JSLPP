export function renderTodoTasks(tasks, container, openModal) {
  tasks.forEach((task) => {
    if (task.status === "todo") {
      const todoTask = document.createElement("div");
      todoTask.innerText = task.title;
      todoTask.classList.add(
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
      todoTask.addEventListener("click", () => openModal(task));
      container.appendChild(todoTask);
    }
  });
}
