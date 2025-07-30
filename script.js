const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const statusFilter = document.getElementById("statusFilter");

let tasks = [];
let editingTaskId = null;

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").value;
  const desc = document.getElementById("taskDesc").value;

  if (editingTaskId) {
    tasks = tasks.map(task =>
      task.id === editingTaskId ? { ...task, name, date, priority, desc } : task
    );
    editingTaskId = null;
  } else {
    const task = {
      id: Date.now(),
      name,
      date,
      priority,
      desc,
      completed: false
    };
    tasks.push(task);
  }
  renderTasks();
  taskForm.reset();
});

statusFilter.addEventListener("change", renderTasks);

function renderTasks() {
  taskList.innerHTML = "";
  const filtered = tasks.filter(task => {
    if (statusFilter.value === "all") return true;
    return statusFilter.value === "completed" ? task.completed : !task.completed;
  });

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");
    li.innerHTML = `
      <div>
        <strong>${task.name}</strong><br/>
        Due: ${task.date} | Priority: ${task.priority}<br/>
        ${task.desc}
      </div>
      <div class="task-actions">
        <button class="complete" onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  document.getElementById("taskName").value = task.name;
  document.getElementById("taskDueDate").value = task.date;
  document.getElementById("taskPriority").value = task.priority;
  document.getElementById("taskDesc").value = task.desc;
  editingTaskId = id;
}
