import express from 'express';

const PORT = 3555;
const app = express();

app.use((req, res, next) => {
  console.log(`Tome: ${new Date().toLocaleString()}`);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello word',
  });
});

app.use('', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
