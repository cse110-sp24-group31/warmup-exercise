var tasks; //this is changed to make a In-memory Update (session only)
async function fetchTasks() {
  try {
    const response = await fetch("tasks.json"); // Fetch JSON file
    tasks = await response.json(); // Parse JSON response
    displayTasks(tasks); // Display tasks
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// Function to filter tasks based on selected categories
function filterTasks() {
  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((checkbox) => checkbox.value);
  const filteredTasks = tasks.filter((task) =>
    selectedCategories.includes(task.category)
  );
  displayTasks(filteredTasks);
}

function displayTasks(tasks) {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";

  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((checkbox) => checkbox.value);
  const filteredTasks = tasks.filter((task) =>
    selectedCategories.includes(task.category)
  );

  filteredTasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.textContent = task.task;
    tasksContainer.appendChild(taskElement);
  });
}

//#region Task: Edit task feature
// Task URL: https://github.com/cse110-sp24-group31/warmup-exercise/issues/16
// Task description:
// Description of Feature wanted
// User can change name, deadline, priority, description, etc. of tasks
// Describe how we would implement this solution
// User can edit existing json files
// Assignee: Zilin Liu

//would require tasks in the fetch tasks function

const form = document.querySelector("#task-input");
form.addEventListener("submit", handleTaskFormSubmit);

function handleTaskFormSubmit(event) {
  event.preventDefault(); //disable submit refresh
  const data = new FormData(event.target);
  const values = Object.fromEntries(data.entries());
  values.deadline = form.querySelector("[type = datetime-local]").value;
  //console.log(values);

  //find the the existing tasks
  var index = tasks.findIndex(
    (current_task) => current_task.task === values.task
  );
  //if the task value of any entry in the tasks.json matches your task description, replace with new entry
  if (index != -1) {
    //console.log("Task already exists, update task" + index);
    tasks[index] = values;
  } else {
    //create new entry
    tasks.push(values);
  }
  console.log(tasks);
  displayTasks(tasks);
}

//#endregion
