class TaskRepository {
  constructor() {
    this.tasks = [];
  }

  saveTask(task) {
    task.id = Date.now();
    this.tasks.push(task);
    return task;
  }

  getAllTasks() {
    return [...this.tasks];
  }

  updateTask(id, updatedTask) {
    const index = this.tasks.findIndex(t => t.id === id);
    if(index !== -1) {
      this.tasks[index] = {...this.tasks[index], ...updatedTask};
      return true;
    }
    return false;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  getTaskById(id) {
    return this.tasks.find(t => t.id === id);
  }
}