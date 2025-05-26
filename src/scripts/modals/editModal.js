export function setupEditModal(
  modal,
  titleInput,
  descriptionInput,
  statusSelect,
  closeModalBtn
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

  return { openModal, closeModal };
}
