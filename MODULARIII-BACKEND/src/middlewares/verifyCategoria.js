import Categoria, { CATEGORIAS } from "../models/Categoria";


// d revisar nombre duplicado
const checkDuplicateNameCategoria= async (req, res, next) => {
  try {
    const nombre = await Categoria.findOne({ nombre: req.body.nombre });
    if (nombre)
      return res.status(400).json({ message: "la categoria ya existe" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


// d comprobar los roles existentes


export { checkDuplicateNameCategoria };
