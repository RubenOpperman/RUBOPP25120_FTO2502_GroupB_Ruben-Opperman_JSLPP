const loadingElement = document.getElementById("loading-message");

/**
 * Fetches data with an api if there is no data in the local storage already and retrieves an array of objects and if the fetching is not successful then there wil be an error message.
 * @returns data as an array of objects
 */
export async function fetchTasks() {
  if (loadingElement) {
    loadingElement.classList.remove("hidden");
  }

  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error:\n" + error.message);
    return [];
  } finally {
    if (loadingElement) {
      loadingElement.classList.add("hidden");
    }
  }
}
