document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to category checkboxes
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Select the tasks column that matches the checkbox value
            const taskColumn = document.getElementById(`${checkbox.value}-tasks`);
            // Toggle the visibility based on checkbox checked state
            if (checkbox.checked) {
                taskColumn.style.display = 'block';
            } else {
                taskColumn.style.display = 'none';
            }
        });
    });

    // Initially hide all columns
    document.querySelectorAll('.tasks-column').forEach(column => {
        column.style.display = 'none';
    });

    // Trigger the change event to align with the initial checked state
    document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
        checkbox.dispatchEvent(new Event('change'));
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the default form submission

        const taskType = document.getElementById('task-type').value;
        const taskDesc = document.getElementById('task').value;

        if (taskDesc.trim() === '') {
            alert('Please enter a task description.');
            return;
        }

        // Create the list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskDesc;

        // Append to the correct list based on the task type
        const taskList = document.getElementById(`${taskType}-tasks`).querySelector('ul');
        taskList.appendChild(taskItem);

        // Clear the textarea after submission
        document.getElementById('task').value = '';
    });
});
