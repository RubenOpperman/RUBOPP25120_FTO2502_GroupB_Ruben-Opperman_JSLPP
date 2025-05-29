/**
 *This function populates the tasks in the html in their respective fields sorting in status.
 * @param {array} tasks is an array of objects containing id, title, description and status.
 * @param {parent div element} container is a div
 * @param {function} openModal is a funciton that opens a modal
 */
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
