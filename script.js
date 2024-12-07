// Get references to DOM elements
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add task to the list
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Do nothing if input is empty
  
  // Create a new list item
  const li = document.createElement('li');
  
  // Create text node and append it to the list item
  const textNode = document.createTextNode(taskText);
  li.appendChild(textNode);

  // Create a delete button and append it to the list item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', () => {
    li.remove(); // Remove the task from the list when clicked
  });
  li.appendChild(deleteButton);
  // console.log(li);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
});

// Optional: Press Enter to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});
