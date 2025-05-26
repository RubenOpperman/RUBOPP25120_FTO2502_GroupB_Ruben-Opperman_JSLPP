import { fetchTasks } from "../initialData.js";

export async function loadTasksFromStorage() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!savedTasks || savedTasks.length === 0) {
    const fetchedTasks = await fetchTasks();
    localStorage.setItem("tasks", JSON.stringify(fetchedTasks));
    return fetchedTasks;
  }

  return savedTasks;
}

export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
