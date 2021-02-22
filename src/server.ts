import express from 'express';

const app = express();

// 1 param => Rota(Recurso API)
// 2 param => request, response
app.get("/", (request, response) =>{

    return response.json({ kelela: "Hello NUB"});
});

app.post("/", (request, response) =>{
    //Recebe os dads para cadastro
    return response.json({ message: "Dados Salvos com sucesso NUB"});
});


app.listen(3333, () => console.log("Servidor rodando"));