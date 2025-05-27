import { saveTasksToStorage } from "../utils/localStorage.js";

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

  function openModal(task) {
    selectedTask = task;
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    statusSelect.value = task.status;
    modal.showModal();
  }

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
