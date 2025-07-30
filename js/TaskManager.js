class TaskManager {
  constructor() {
    this.taskValidator = new TaskValidator();
    this.taskRepository = new TaskRepository();
  }

  addTask(taskData) {
    const task = {
      ...taskData,
      status: "Chưa bắt đầu"
    };

    if(this.taskValidator.validateTask(task)) {
      const savedTask = this.taskRepository.saveTask(task);
      if(savedTask) {
        return true;
      }
    }
    return false;
  }

  updateTask(id, task) {
    if(this.taskValidator.validateTask(task)) {
      return this.taskRepository.updateTask(id, task);
    }
    return false;
  }

  deleteTask(id) {
    this.taskRepository.deleteTask(id);
  }

  getAllTasks() {
    return this.taskRepository.getAllTasks();
  }

  getTaskById(id) {
    return this.taskRepository.getTaskById(id);
  }

  changeStatus(id) {
    const task = this.getTaskById(id);
    if (task) {
      const updatedTask = { ...task };
      if (updatedTask.status === "Chưa bắt đầu") {
        updatedTask.status = "Đang thực hiện";
      } else if (updatedTask.status === "Đang thực hiện") {
        updatedTask.status = "Đã hoàn thành";
      } else {
        updatedTask.status = "Chưa bắt đầu";
      }
      this.taskRepository.updateTask(id, updatedTask);
      return true;
    }
    return false;
  }
}