class Task {
  constructor(title, description, dueDate, status = 'pending') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
  }
}

module.exports = Task;
