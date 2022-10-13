const express = require('express');
const router = express.Router();
const produtosService = require('../service/produtosService');

router.get('/produtos', async function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    let produtos = await produtosService.getProdutos();
    res.json(produtos);
})



module.exports = router;