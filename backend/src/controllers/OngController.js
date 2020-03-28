const connection = require('../database/connection');
const crypto = require('crypto');

async function createController(req,res) {
    const {name, email, whatsapp, city, uf } = req.body 
    const id = crypto.pseudoRandomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name, 
        email,
        whatsapp,
        city,
        uf
    });
    
    return res.json({id});
}

async function indexController(req,res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
}


module.exports = { createController, indexController  }