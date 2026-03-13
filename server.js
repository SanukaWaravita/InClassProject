// port config
const port = 3001;

// express config
const exp = require('express');

// config the server application
const app = exp();

app.use(exp.urlencoded({ extended: true }));

let storedUserName = '';
app.get('/', (req, res) => {
    res.send(`
        
    `);
});

app.post('/submit-name', (req, res) => {
    storedUserName = req.body.userName;
    res.redirect('/welcome');
});

app.get('/welcome', (req, res) => {
    res.send(`<h1>Welcome, ${storedUserName || 'Guest'}!</h1>`);
});

app.get('/api', (req, res) => {
    res.json({message: "HELLO"});
});

app.listen(port, () => {
    console.log(`Server is under the water at port: ${port}`);
});