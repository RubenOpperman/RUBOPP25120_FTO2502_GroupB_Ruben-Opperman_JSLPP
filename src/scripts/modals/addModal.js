import { saveTasksToStorage } from "../utils/localStorage.js";

/**
 *
 * @param {array} savedTasks - an array of objects containing id, title, discription, status.
 * @param {button} addTaskBtn - button that opens a modal where you can add a task
 * @param {button} closeBtn -button that closes a modal where you can add a task.
 * @param {button} saveBtn - This button saves the the new task
 * @param {array} inputs - contains title, description , status from a single task
 * @param {modal} addModal - a modal where you can add a task.
 */
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
