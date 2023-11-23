const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Get tasks
router.get('/', taskController.getTasks);

// Create task
router.post('/', taskController.createTask);

// Update task
router.put('/:taskId', taskController.updateTask);

// Delete task
router.delete('/:taskId', taskController.deleteTask);

// Update task status
router.patch('/:taskId', taskController.updateTaskStatus);

module.exports = router;
