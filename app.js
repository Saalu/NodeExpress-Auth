const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const mongoURI = 'mongodb+srv://saalih:123saalih@cluster0-iz6tq.mongodb.net/saalih?retryWrites=true&w=majority';
mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(() => console.log('Database Connected'))
	.catch((err) => console.log(err));
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started' + PORT));
