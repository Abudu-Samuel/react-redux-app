import express from 'express';
import path from 'path';
import compression from 'compression';


const app = express();
const port = process.env.PORT || 9000;

app.use(compression());
app.use(express.static('dist'));

app.get('/api', (req, res) => {
  res.json({ message: 'Redirecting to the production api' });
});

app.all('/api*', (req, res) => {
  res.json({ message: 'You got lost in space' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port, () => console.log(`server is up and running on port ${port}`));