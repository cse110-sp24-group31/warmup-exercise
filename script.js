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

        updateDeleteSelect();
    
        document.getElementById('task').value = '';
    });
});

//Update the select element when you change Task Type in the delete section
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('select#task-type-del').addEventListener('change', function(e) {
        updateDeleteSelect();
    })
});

//Delete selected task
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form#delete').addEventListener('submit', function(e) {
        e.preventDefault();

        const taskType = document.getElementById('task-type-del').value;
        const tasks = document.getElementById(`${taskType}-tasks`).querySelector('ul').querySelectorAll('li');

        const taskToDelete = document.getElementById('task-del').value;

        tasks.forEach(li => {
            if (li.textContent === taskToDelete) {
                li.remove();
            }
        });

        updateDeleteSelect();
    })
});

function updateDeleteSelect(){
    const taskType = document.getElementById('task-type-del').value;
    const taskDesc = document.getElementById('task-del');
    
    const taskList = document.getElementById(`${taskType}-tasks`).querySelector('ul');

    taskDesc.innerHTML = '';

    taskList.querySelectorAll('li').forEach(task => {
        const option = document.createElement('option');
        option.value = task.textContent;
        option.textContent = task.textContent;

        taskDesc.appendChild(option);
    })
}

function resetTaskList(){
    const tasksContainer = document.querySelectorAll('.task-list ul');
    
    tasksContainer.forEach(ul => {
        ul.innerHTML = '';
    })

    console.log("Task list has been reset.");
}
