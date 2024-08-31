function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.className = 'taskText';
    span.textContent = taskInput.value;

    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        editTask(span);
    };

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

function editTask(span) {
    let newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null && newTask !== '') {
        span.textContent = newTask;
    }
}
