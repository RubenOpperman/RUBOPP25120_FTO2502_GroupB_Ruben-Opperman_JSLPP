# Kanban Board UI Project

## 📋 Project Overview

This project is a fully responsive task management interface built from a Figma design. The main goal was to accurately recreate the layout using HTML and CSS, with a focus on clean code structure and responsive design for both mobile and desktop use.

JavaScript is used to add interactivity. Tasks are loaded either from local storage or an API, and displayed in columns based on their status. Users can add, edit, and delete tasks, and all changes are saved so the data stays persistent.

The app includes features like sidebar toggling, a dark/light theme switch, and a modular JavaScript file structure that makes the code easier to manage and understand.

## 🎨 Figma Design Link

[View the Figma Design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=6033-10647&t=axb0x8BuspW5XYJy-0)

## 🛠️ Technologies Used

- **HTML5** – Structure and content
- **CSS3** / **TailwindCSS** – Styling and responsiveness
- **Figma** – UI design reference
- **JavaScript** – Adds interactivity and dynamic behavior

## File structure

```
C:.
│
├── .gitignore # Ignores node_modules and other unnecessary files
├── index.html # Main HTML structure of the app
├── package.json # Tailwind CSS dependencies and scripts
├── package-lock.json # Lockfile for Tailwind and related packages
├── README.md # You're here! Project description and usage
│
├── assets/ # Static assets like icons and logos
│ ├── favicon.svg
│ ├── Group 15.svg
│ ├── icon-board.svg
│ ├── icon-dark-theme.svg
│ ├── icon-hide-sidebar.svg
│ ├── icon-light-theme.svg
│ ├── icon-show-sidebar.svg
│ ├── logo-dark.svg
│ └── logo-light.svg
│
├── src/ # Source CSS and scripts
│ ├── input.css # Custom styles and Tailwind color variables
│ ├── output.css # Compiled Tailwind CSS file
│
├── scripts/ # Main JavaScript logic
│ ├── initialData.js # Loads tasks from API or local storage
│ ├── main.js # Entry point for board functionality
│ ├── mobileSidebar.js # Handles mobile sidebar toggle
│ ├── sidebar.js # Handles desktop sidebar toggle
│ └── Theme.js # Dark/light mode toggle
│
│ ├── modals/ # Task modal logic
│ │ ├── addModal.js # Function to add new tasks
│ │ └── editModal.js # Function to edit or delete tasks
│
│ ├── render/ # Rendering logic for tasks
│ │ ├── renderTodo.js # Renders "To Do" tasks
│ │ ├── renderDoing.js # Renders "Doing" tasks
│ │ └── renderDone.js # Renders "Done" tasks
│
│ └── utils/ # Utility functions
│ └── localStorage.js # Reads and writes tasks to local storage
```

## module overview

### 🔁 scripts/

- `main.js` — Main logic that initializes the board and loads data
- `initialData.js` — Loads tasks from local storage or API
- `sidebar.js` & `mobileSidebar.js` — Handle sidebar toggle functionality
- `Theme.js` — Enables light/dark theme toggle

### 🧩 modals/

- `addModal.js` — Handles adding new tasks
- `editModal.js` — Handles editing or deleting tasks

### 🎨 render/

- `renderTodo.js`, `renderDoing.js`, `renderDone.js` — Render tasks by status

### 🛠️ utils/

- `localStorage.js` — Save and retrieve tasks from browser storage

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/RubenOpperman/RUBOPP25120_FTO2502_GroupB_Ruben-Opperman_JSLPP.git

```

## 2. Navigate into the project directory

```bash
cd RUBOPP25120_FTO2502_GroupB_Ruben-Opperman_JSLPP
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

## 5. Open with live server

Run with live server and explore!!

## 6. Presentation link:

https://www.veed.io/view/2c7ccac4-73c7-4156-901e-9ae40f861fb1?panel=share

## 7. Deployment Link:
