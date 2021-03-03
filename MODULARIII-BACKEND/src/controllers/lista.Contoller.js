import Lista from "../models/Lista";
import Producto from "../models/Producto";


// d crear lista
export const crearLista = async (req, res) => {
  
  try {
    let { nombre,productos, creador} = req.body;

    const filtroproducto =  await Producto.find();

    let buscar = []
    for( let producto of productos ) {

      const verduras = filtroproducto.filter(e => {
        if(e._id == producto ) return buscar.push(e)
      })
    }
    
    productos = buscar

    const nuevaLista = new Lista({
      nombre,
      productos,
      creador,
    });

  

    const guardarLista = await nuevaLista.save();
    res.status(201).json(guardarLista);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};


// d obtener lista por ID
export const obtenerLista = async (req, res) => {
  const { listaId } = req.params;
  const lista = await Lista.findById(listaId).populate("productos");
  res.status(200).json(lista);
};


// d obtener todas las listas
// export const obtenerListas = async (req, res) => {
//   const listas = await Lista.find();
//   return res.json(listas);
// };



// d actualziar lista por ID
export const actualizarLista = async (req, res) => {
  const actualizarLista = await Lista.findByIdAndUpdate(
    req.params.listaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(actualizarLista);
  // res.status(204).json(updatedProduct);
};


// d eliminar Lista
export const eliminarLista = async (req, res) => {
  const { listaId } = req.params;

  await Lista.findByIdAndDelete(listaId);
  // code 200 is ok too
  res.status(204).json();
};



// d obtiene todas las listas del usuario actual
export const obtenerListasUser = async (req, res) => {

  const id = req.userId
  try {
      const listas = await Lista.find({ creador: id }).populate("productos");

      res.json(listas)
  } catch (error) {
      console.log(error);
      res.status(500).send('hubo un error')
  }
}