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
  doneContainer
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
