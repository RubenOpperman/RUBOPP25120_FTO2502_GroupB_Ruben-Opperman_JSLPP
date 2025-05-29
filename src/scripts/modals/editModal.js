import { saveTasksToStorage } from "../utils/localStorage.js";

/**
 * this function opens a modal and closes a modal where you can edit tasks or delete them and also view the task content
 * @param {modal} modal this modal contains a task's data.
 * @param {string} titleInput - title of task
 * @param {string} descriptionInput - discription of task
 * @param {string} statusSelect - status of task
 * @param {button} closeModalBtn - button closes the modal
 * @param {button} saveBtn - button saves the data to the local storage.
 * @param {array} tasks - array of objects containing id, title, discription and status.
 * @param {div} todoContainer - div container containing todo tasks
 * @param {div} doingContainer- div container containing doing tasks
 * @param {div} doneContainer- div container containing done tasks
 * @param {button} deleteBtn - button deletes a task
 * @returns this function returns the open and close functions for the modals.
 */
export function setupEditModal(
  modal,
  titleInput,
  descriptionInput,
  statusSelect,
  closeModalBtn,
  saveBtn,
  tasks,
  todoContainer,
  doingContainer,
  doneContainer,
  deleteBtn
) {
  let selectedTask = null;

  /**
   * This function opens a modal of a task
   * @param {object} task
   */
  function openModal(task) {
    selectedTask = task;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    statusSelect.value = task.status;
    modal.showModal();
  }

  /**
   * This funciton closes the modal of a task.
   */
  function closeModal() {
    modal.close();
    selectedTask = null;
    titleInput.value = "";
    descriptionInput.value = "";
    statusSelect.value = "";
  }

  deleteBtn.addEventListener("click", (event) => {
    if (!selectedTask) return;

    let ConfirmDeleteResult = confirm("Do you want to delete this task?");
    if (ConfirmDeleteResult == true) {
      let index = tasks.findIndex((user) => user.id === selectedTask.id);

      tasks.splice(index, 1);
      saveTasksToStorage(tasks);

      renderTodoTasks(tasks, todoContainer, openModal);
      renderDoingTasks(tasks, doingContainer, openModal);
      renderDoneTasks(tasks, doneContainer, openModal);
    } else {
      event.preventDefault();
      return;
    }

    modal.close();
  });

  closeModalBtn.addEventListener("click", closeModal);

  saveBtn.addEventListener("click", () => {
    if (!selectedTask) return;

    selectedTask.title = titleInput.value;
    selectedTask.description = descriptionInput.value;
    selectedTask.status = statusSelect.value;

    saveTasksToStorage(tasks);

    renderTodoTasks(tasks, todoContainer, openModal);
    renderDoingTasks(tasks, doingContainer, openModal);
    renderDoneTasks(tasks, doneContainer, openModal);

    modal.close();
  });

  return { openModal, closeModal };
}
