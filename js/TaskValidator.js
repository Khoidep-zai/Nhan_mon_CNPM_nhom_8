class TaskValidator {
  validateTask(task) {
    if(!task.name || task.name.trim() === '') {
      return false;
    }

    if(!task.date) {
      return false;  
    }

    if(!Priority.isValid(task.priority)) {
      return false;
    }

    return true;
  }
}