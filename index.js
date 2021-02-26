import express from 'express';
import bodyParse from 'body-parser';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParse.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello first Page')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))