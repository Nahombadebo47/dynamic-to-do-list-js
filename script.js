document.addEventListener('DOMContentLoaded', () => {
    let addButton = document.getElementById('add-task-btn');
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a new task to the list and optionally save it to Local Storage
    function addTask(taskText, save = true) {
        if (!taskText) {
            alert('Please Enter a Task...');
            return; // Exit the function if the task text is empty
        }

        const li = document.createElement('li'); // Create li element
        li.textContent = taskText; // Set text content of li to task text

        const removeButton = document.createElement('button'); // Create button element
        removeButton.textContent = 'Remove'; // Set text content of button to 'Remove'
        removeButton.classList.add('remove-btn'); // Add class to button
        removeButton.addEventListener('click', (event) => {
            const li = event.target.parentElement; // Get parent li element
            taskList.removeChild(li); // Remove li from task list
            removeTask(taskText); // Remove task from Local Storage
        });

        li.appendChild(removeButton); // Append button to li
        taskList.appendChild(li); // Append li to task list

        if (save) {
            saveTask(taskText); // Save the task to Local Storage
        }

        taskInput.value = ''; // Clear input field
    }

    // Function to save a task to Local Storage
    function saveTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add event listener to add button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add event listener to handle Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
