const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const privilegesRoutes = require('./routes/privileges');
// Import other route files

const app = express();

app.use(cors());
app.use(express.json());

// JWT middleware
app.use((req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

// Routes
app.use('/api/privileges', privilegesRoutes);
// Add other routes here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});