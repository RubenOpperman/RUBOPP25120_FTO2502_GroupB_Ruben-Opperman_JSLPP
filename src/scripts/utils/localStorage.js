import { fetchTasks } from "../initialData.js";

/**
 * This task checks the local storage for task data and when the local storage is empty then the api fetches the data and loads it to the local storage.
 * @returns an array of objects full of task data.
 */
export async function loadTasksFromStorage() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!savedTasks || savedTasks.length === 0) {
    const fetchedTasks = await fetchTasks();
    localStorage.setItem("tasks", JSON.stringify(fetchedTasks));
    return fetchedTasks;
  }

  return savedTasks;
}

/**
 * This funciton overwrites the local storage data and updates it .
 * @param {Array} tasks is an array of objects that contains task data .
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
