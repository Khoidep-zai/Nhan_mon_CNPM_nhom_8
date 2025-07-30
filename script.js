const taskForm = document.getElementById("taskForm");
const taskTableBody = document.querySelector("#taskTable tbody");
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
      status: "Chưa bắt đầu"
    };
    tasks.push(task);
  }
  renderTasks();
  taskForm.reset();
});

statusFilter.addEventListener("change", renderTasks);

function renderTasks() {
  taskTableBody.innerHTML = "";
  let filtered = tasks;
  if (statusFilter.value === "completed") {
    filtered = tasks.filter(task => task.status === "Đã hoàn thành");
  } else if (statusFilter.value === "incomplete") {
    filtered = tasks.filter(task => task.status !== "Đã hoàn thành");
  }
  filtered.forEach((task, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${task.name}</td>
      <td>${task.desc}</td>
      <td>${task.date}</td>
      <td>${task.priority}</td>
      <td>${task.status}</td>
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
  const task = tasks.find(t => t.id === id);
  if (task.status === "Chưa bắt đầu") {
    task.status = "Đang thực hiện";
  } else if (task.status === "Đang thực hiện") {
    task.status = "Đã hoàn thành";
  } else {
    task.status = "Chưa bắt đầu";
  }
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

// Khởi tạo bảng khi tải trang
renderTasks();
