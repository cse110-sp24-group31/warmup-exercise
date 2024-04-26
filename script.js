document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskColumn = document.getElementById(`${checkbox.value}-tasks`);
            if (checkbox.checked) {
                taskColumn.style.display = 'block';
            } else {
                taskColumn.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.tasks-column').forEach(column => {
        column.style.display = 'none';
    });

    document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
        checkbox.dispatchEvent(new Event('change'));
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); 

        const taskType = document.getElementById('task-type').value;
        const taskDesc = document.getElementById('task').value;

        if (taskDesc.trim() === '') {
            alert('Please enter a task description.');
            return;
        }

     
        const taskItem = document.createElement('li');
        taskItem.textContent = taskDesc;

     
        const taskList = document.getElementById(`${taskType}-tasks`).querySelector('ul');
        taskList.appendChild(taskItem);

    
        document.getElementById('task').value = '';
    });
});

