document.addEventListener('DOMContentLoaded', () => {
    let addButton = document.getElementById('add-task-btn');
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    const addTask = () => {
        let taskText = taskInput.value.trim();
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
        });

        li.appendChild(removeButton); // Append button to li
        taskList.appendChild(li); // Append li to task list
        taskInput.value = ''; // Clear input field
    };

    addButton.addEventListener('click', addTask); // Add event listener to add button

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on Enter key press
        }
    });
});
