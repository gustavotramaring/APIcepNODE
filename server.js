const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep; //obtendo cep da url
    const cepRegex = /^[0-9]{5}-?[09]{3}$/;

    if(!cepRegex.test(cep)){
        res.status(400).send('CEP Inválido');
    }

    try {
        //fazendo requisiçao para a api do viaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data); //retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao fazer requisição: ', error);
        res.status(500).send('Erro ao consultar o CEP');
    } 

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});