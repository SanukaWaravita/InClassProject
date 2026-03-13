// port config
const port = 3001;

// express config
const exp = require('express');
const readline = require('readline');

// config the server application
const app = exp();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your batch number: ', (batchNumber) => {
        console.log(`Name: ${name}`);
        console.log(`Batch Number: ${batchNumber}`);

        rl.close();

        app.listen(port, () => {
            console.log(`Server is under the water at port: ${port}`);
        });
    });
});

app.get('/api', (req, res) => {
    res.json({message: "HELLO"});
});