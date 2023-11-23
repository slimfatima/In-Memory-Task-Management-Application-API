const tasks = [];

exports.getTasks = (req, res) => {
  res.status(200).json(tasks);
};

exports.createTask = (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = { title, description, dueDate, status: 'pending' };
  tasks.push(newTask);
  res.status(201).json({ message: 'Task created successfully' });
};

exports.updateTask = (req, res) => {
  const taskId = req.params.taskId;
  const { title, description, dueDate } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], title, description, dueDate };
    res.status(200).json({ message: 'Task updated successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

exports.deleteTask = (req, res) => {
  const taskId = req.params.taskId;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

exports.updateTaskStatus = (req, res) => {
  const taskId = req.params.taskId;
  const { status } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].status = status;
    res.status(200).json({ message: 'Task status updated successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
