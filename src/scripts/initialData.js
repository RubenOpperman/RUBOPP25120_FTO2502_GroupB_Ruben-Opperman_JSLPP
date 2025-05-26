export async function fetchTasks() {
  const loadingElement = document.getElementById("loading-message");
  if (loadingElement) loadingElement.classList.remove("hidden");

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
