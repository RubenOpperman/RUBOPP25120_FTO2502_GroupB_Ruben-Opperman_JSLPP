import { loadTasksFromStorage } from "./utils/localStorage.js";
import { setupAddModal } from "./modals/addModal.js";
import { setupEditModal } from "./modals/editModal.js";

import { renderTodoTasks } from "./render/renderTodo.js";
import { renderDoingTasks } from "./render/renderDoing.js";
import { renderDoneTasks } from "./render/renderDone.js";

import { toggleSidebar } from "./sidebar.js";
import { mobileSidebar } from "./mobileSidebar.js";

import { ToggleTheme } from "./Theme.js";
// DOM Elements
const todoContainer = document.getElementById("todo-container");
const doingContainer = document.getElementById("doing-container");
const doneContainer = document.getElementById("done-container");

const modal = document.getElementById("edit-modal");
const titleInput = document.getElementById("modal-title");
const descriptionInput = document.getElementById("modal-description");
const statusSelect = document.getElementById("modal-status");
const closeModalBtn = document.getElementById("close-modal");

const deleteTaskBtn = document.getElementById("Delete-task-btn");
const saveTask = document.getElementById("Save-task-btn");

const addModal = document.getElementById("add-modal");
const addTaskBtn = document.getElementById("add-task-btn");
const closeAddModalBtn = document.getElementById("close-add-modal");
const saveNewTask = document.getElementById("save-new-task");

const wrapper = document.getElementById("wrapper");
const nav = document.getElementById("nav");
const closeSidebarBtn = document.getElementById("Close-sidebar-button");
const body = document.getElementById("body");
const outerContainer = document.getElementById("outer-container");

const newTaskInputs = [
  document.getElementById("add-modal-title"),
  document.getElementById("add-modal-description"),
  document.getElementById("add-modal-status"),
];

/**
 * This function retrieves the data that was fetched from the api or the local storage.
 */
async function init() {
  const savedTasks = await loadTasksFromStorage();

  const { openModal } = setupEditModal(
    modal,
    titleInput,
    descriptionInput,
    statusSelect,
    closeModalBtn,
    saveTask,
    savedTasks,
    todoContainer,
    doingContainer,
    doneContainer,
    deleteTaskBtn
  );

  setupAddModal(
    savedTasks,
    addTaskBtn,
    closeAddModalBtn,
    saveNewTask,
    newTaskInputs,
    addModal
  );

  renderTodoTasks(savedTasks, todoContainer, openModal);
  renderDoingTasks(savedTasks, doingContainer, openModal);
  renderDoneTasks(savedTasks, doneContainer, openModal);
}

/**
 * This function changes the button's text depending on the screen size.
 */
const updateBtnText = () => {
  addTaskBtn.innerText = window.innerWidth <= 768 ? "+" : "+ Add New Task";
};

window.addEventListener("resize", updateBtnText);
closeSidebarBtn.addEventListener("click", toggleSidebar);

init();
updateBtnText();
mobileSidebar();
ToggleTheme();

//localStorage.clear();
