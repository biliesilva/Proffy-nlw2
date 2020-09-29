import express from 'express';
const app = express();

app.user(express.json());


app.post('/users', (request, response) => {
    console.log(request.body);

    const users = [
        { name: 'Biliane', age: '31' }
    ];

    return response.json(users);
});

//localhost:3333

app.listen(3333); 