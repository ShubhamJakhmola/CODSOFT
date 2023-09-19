function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: taskText }),
        })
        .then(response => response.json())
        .then(newTask => {
                   })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

function updateTask(taskId, newText) {
    fetch(`/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText }),
    })
    .then(response => response.json())
    .then(updatedTask => {
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteTask(taskId) {
    fetch(`/tasks/${taskId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(result => {
              
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach((taskText) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${taskText}</span>
                            <button class="edit">Edit</button>
                            <button class="delete">Delete</button>`;
            taskList.appendChild(li);

            li.querySelector('.delete').addEventListener('click', () => {
                li.remove();
                updateLocalStorage();
            });

            li.querySelector('.edit').addEventListener('click', () => {
                const newText = prompt('Edit task:', taskText);
                if (newText !== null) {
                    taskText = newText.trim();
                    li.querySelector('span').textContent = taskText;
                    updateLocalStorage();
                }
            });
        });
    }
});
