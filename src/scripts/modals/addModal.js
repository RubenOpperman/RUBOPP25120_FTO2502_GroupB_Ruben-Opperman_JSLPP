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
    const newTask = {
      id: savedTasks.length + 1,
      title: titleInput.value,
      description: descInput.value,
      status: statusSelect.value,
    };

    savedTasks.push(newTask);
    saveTasksToStorage(savedTasks);
    addModal.close();
  });
}
