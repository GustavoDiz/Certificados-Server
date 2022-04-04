const { asyncScheduler } = require("rxjs");
const Cursos = require("../models/cursoModel");

const index = async (req, res) => {
  const user = await Cursos.find();
  res.json(user);
};

const create = async (req, res , err) => {
  const {
    nome_curso,
    descrição_curso,
    autor,
    emailContato,
    dataCurso,
    tipo_curso,
  } = req.body;

  let data = {};

  let user = await Cursos.findOne({ nome_curso });
  if (!user) {
    data = {
      nome_curso,
      descrição_curso,
      autor,
      emailContato,
      dataCurso,
      tipo_curso,
    };
    user = await Cursos.create(data);
    return res.status(200).json(user);
  } else {
    return res.status(500).json(err);
  }
};

const list = async (req,res) =>{
    const user = await Cursos.find();
    const id = req.params.id;

    if(id){
        const ID = await Cursos.findById(id);
    res.json(ID);
    }else{
        res.json(user);
    }
   
}

const remove = async (req,res) => {
    const id = req.params.id;
    const user = await Cursos.findByIdAndRemove(id);
    return res.json(user);
}

const update = async (req,res)=> {
    const id = req.params.id;
    const {
        nome_curso,
        descrição_curso,
        autor,
        emailContato,
        dataCurso,
        tipo_curso,
      } = req.body;

    const data = {
        nome_curso,
        descrição_curso,
        autor,
        emailContato,
        dataCurso,
        tipo_curso,
    }

    const user = await Cursos.findByIdAndUpdate(id,data,{new:true});
    res.json(user);
}

const details = async (req, res) => {
  const id = req.params.id;
  const user = await Cursos.findById(id);
  res.json(user);
}

module.exports = {
  index,
  create,
  list,
  remove,
  update,
  details
};
