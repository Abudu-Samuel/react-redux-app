import express from 'express';
import path from 'path';
import compression from 'compression';


const app = express();
const port = process.env.PORT || 9000;

app.use(compression());
app.use(express.static('dist'));

app.use('/api', (req, res) => {
  res.json({ message: 'Redirecting to the production api' });
});

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(port, () => console.log(`server is up and running on port ${port}`));