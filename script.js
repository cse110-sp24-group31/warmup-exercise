// Sample tasks data (replace with your actual data)
const tasks = [
    { name: "Task 1", category: "work" },
    { name: "Task 2", category: "personal" },
    { name: "Task 3", category: "other" },
    // Add more tasks as needed
];

// Function to filter tasks based on selected categories
function filterTasks() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const filteredTasks = tasks.filter(task => selectedCategories.includes(task.category));
    displayTasks(filteredTasks);
}

// Function to display tasks
function displayTasks(tasks) {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = ''; // Clear previous tasks

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = task.name;
        tasksContainer.appendChild(taskElement);
    });
}
