import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.send("Hello World - NLW04!")
});

app.listen(3333, () => console.log("Server is runnig!"));