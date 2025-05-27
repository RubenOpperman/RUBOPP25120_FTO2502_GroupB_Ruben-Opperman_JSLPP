import { saveTasksToStorage } from "../utils/localStorage.js";

export function setupAddModal(
  savedTasks,
  addTaskBtn,
  closeBtn,
  saveBtn,
  inputs,
  addModal
) {
  const [titleInput, descInput, statusSelect] = inputs;

  addTaskBtn.addEventListener("click", () => addModal.showModal());
  closeBtn.addEventListener("click", () => addModal.close());

  saveBtn.addEventListener("click", () => {
    let maxId = 0;
    savedTasks.forEach((savedTasks) => {
      if (savedTasks.id >= maxId) {
        maxId = savedTasks.id + 1;
      }
    });

    const newTask = {
      id: maxId,
      title: titleInput.value,
      description: descInput.value,
      status: statusSelect.value,
    };

    savedTasks.push(newTask);
    saveTasksToStorage(savedTasks);
    addModal.close();
  });
}
