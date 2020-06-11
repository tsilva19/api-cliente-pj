const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema( {},
{
    collection: 'consulta'

}
);

module.exports = mongoose.model('Consulta', ConsultaSchema)