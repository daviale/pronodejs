import Categoria from "../models/Categoria";


// d crear
export const crearCategoria = async (req, res) => {
  const { nombre} = req.body;
 
  try {
    const nuevaCategoria = new Categoria({
      nombre
    });

    const categoriaGuardada = await nuevaCategoria.save();

    res.status(201).json(categoriaGuardada);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};



// d obtener por ID

export const obtenerCategoriaporID = async (req, res) => {
  const { categoriaId } = req.params;

  const Categoria = await Categoria.findById(categoriaId);
  res.status(200).json(Categoria);
};


// d obtener todas las categorias
export const obtenerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  return res.json(categorias);
};


// d actualizar categoria por id
export const actualizarCategoriaporID = async (req, res) => {
  const actualizarCategoria = await Categoria.findByIdAndUpdate(
    req.params.categoriaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(actualizarCategoria);
};


// d eliminar categoria
export const eliminarCategoria = async (req, res) => {
  const { categoriaId } = req.params;

  await Categoria.findByIdAndDelete(categoriaId);

  // code 200 is ok too
  res.status(204).json();
};
