const taskManager = new TaskManager();
const taskForm = document.getElementById("taskForm");
const taskTableBody = document.querySelector("#taskTable tbody");
const statusFilter = document.getElementById("statusFilter");

let editingTaskId = null;

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const taskData = {
    name: document.getElementById("taskName").value.trim(),
    date: document.getElementById("taskDueDate").value,
    priority: document.getElementById("taskPriority").value,
    desc: document.getElementById("taskDesc").value.trim()
  };

  let success = false;

  if(editingTaskId) {
    success = taskManager.updateTask(editingTaskId, taskData);
    editingTaskId = null;
  } else {
    success = taskManager.addTask(taskData);
  }

  if(success) {
    renderTasks();
    taskForm.reset();
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
  }
});

statusFilter.addEventListener("change", renderTasks);

function renderTasks() {
  const tasks = taskManager.getAllTasks();
  taskTableBody.innerHTML = "";
  
  let filtered = tasks;
  if(statusFilter.value === "completed") {
    filtered = tasks.filter(task => task.status === "Đã hoàn thành");
  } else if(statusFilter.value === "incomplete") {
    filtered = tasks.filter(task => task.status !== "Đã hoàn thành");
  }

  filtered.forEach((task, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${task.name || ''}</td>
      <td>${task.desc || ''}</td>
      <td>${task.date || ''}</td>
      <td>${task.priority || ''}</td>
      <td>${task.status || 'Chưa bắt đầu'}</td>
      <td>
        <button class="sua" onclick="editTask(${task.id})">Sửa</button>
        <button class="sua" onclick="changeStatus(${task.id})">Đổi trạng thái</button>
      </td>
      <td>
        <button class="xoa" onclick="deleteTask(${task.id})">Xóa</button>
      </td>
    `;
    taskTableBody.appendChild(tr);
  });
}

function changeStatus(id) {
  taskManager.changeStatus(id);
  renderTasks();
}

function deleteTask(id) {
  taskManager.deleteTask(id);
  renderTasks();
}

function editTask(id) {
  const task = taskManager.getTaskById(id);
  document.getElementById("taskName").value = task.name;
  document.getElementById("taskDueDate").value = task.date;
  document.getElementById("taskPriority").value = task.priority;
  document.getElementById("taskDesc").value = task.desc;
  editingTaskId = id;
}

// Khởi tạo bảng khi tải trang
document.addEventListener('DOMContentLoaded', function() {
  renderTasks();
});
