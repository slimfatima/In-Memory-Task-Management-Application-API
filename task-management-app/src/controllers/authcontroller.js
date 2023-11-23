// This is a simplified example; in a real-world scenario, you'd use a more secure authentication method.

const registeredUsers = [];

exports.register = (req, res) => {
  const { username, password } = req.body;
  registeredUsers.push({ username, password });
  res.status(201).json({ message: 'Registration successful' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = registeredUsers.find((u) => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
