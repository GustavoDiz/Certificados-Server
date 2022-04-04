const mongoose = require ('mongoose');

const DataSchema = new mongoose.Schema({
    nome_curso:String,
    descrição_curso:String,
    autor:String,
    emailContato:String,
    dataCurso:String,
    tipo_curso:{type:Number,default: 1}
},{
    timestamps:true
})

const cursos = mongoose.model("Cursos",DataSchema);
module.exports = cursos;