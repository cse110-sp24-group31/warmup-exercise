async function fetchTasks() {
    try {
        const response = await fetch('tasks.json'); // Fetch JSON file
        const tasks = await response.json(); // Parse JSON response
        displayTasks(tasks); // Display tasks
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Function to filter tasks based on selected categories
function filterTasks() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const filteredTasks = tasks.filter(task => selectedCategories.includes(task.category));
    displayTasks(filteredTasks);
}

function displayTasks(tasks) {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const filteredTasks = tasks.filter(task => selectedCategories.includes(task.category));

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = task.name;
        tasksContainer.appendChild(taskElement);
    });
}

//function to reset the task list client side only (not removing actual JSON objects, only ones stored in JS/page)
function resetTaskList(){
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = ''; // Clears all tasks from the UI
    console.log("Task list has been reset.");
}

