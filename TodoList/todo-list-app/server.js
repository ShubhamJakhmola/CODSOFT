const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000
;

app.use(bodyParser.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const taskText = req.body.text;
  if (taskText) {
    const newTask = { id: Date.now().toString(), text: taskText };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ error: 'Task text is required.' });
  }
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedText = req.body.text;

  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (taskToUpdate && updatedText) {
    taskToUpdate.text = updatedText;
    res.json(taskToUpdate);
  } else {
    res.status(404).json({ error: 'Task not found.' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted.' });
  } else {
    res.status(404).json({ error: 'Task not found.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
