const Consulta = require('../model/Consulta')
module.exports = {
    async show(req, res) {
        
        
        const consulta = await Consulta.find();
        
        return res.json(consulta)
    },

    async showOne(req, res) {
        const { pais, nome, tipo_presenca, officer, grupo_eco  } = req.query;
        
        const filtro = {};

        const sort ={};
        
        sort["nome_" + pais] = 1;


        if(nome){
            filtro["nome_" + pais] = new RegExp(nome, 'i');
        }      
        
        
        if (officer) {
            filtro[pais + "_nome_officer"] = new RegExp(officer, 'i');
        }

        if (tipo_presenca) {
            filtro["pres_" + pais ] = tipo_presenca;
        }

        if(grupo_eco){
            filtro["nome_ge_bdc_2019"] = new RegExp(grupo_eco, 'i');
        }

        console.log('filtro', filtro);

        console.log('sort', sort);

        const cliente = await Consulta.find(filtro).sort(sort);

        return res.send(JSON.stringify( cliente ));
    }
}

