import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello-world', (req, res) => {
    res.send('Hello, from Lupleg Community');

})

app.get('/', (req, res) => {
    res.send('Hello World');

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









// localhost:3000
// localhost:3000/users
// localhost:3000/users/1
// localhost:3000/products





