const express = require('express');
const app = express();
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/users')
const posts = require('./routes/posts')
const comments = require('./routes/comments')
const groups = require('./routes/groups')

const CONNECTION = `mongodb+srv://${process.env.DB}:${process.env.PASSWORD}@${process.env.HOST}?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log(`MongoDB Connected.`))
    .catch(() => console.log(`MongoDB Failed to connect.`))

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/comments', comments)
app.use('/api/groups', groups)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));