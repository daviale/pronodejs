import { s3 } from "../middlewares/upload";
import Categoria from "../models/Categoria";
import Producto from "../models/Producto";
import crypto from 'crypto'
import { send } from "process";

// d crear producto




export const crearProducto = async (req, res) => {

};





// d obtener producto por ID
// export const obtenerProducto = async (req, res) => {
//   const { productId } = req.params;

//   const producto = await Producto.findById(productId);
//   res.status(200).json(producto);
// };



// d obtener producto por categoria
export const obtenerProductosporCategoria = async (req, res) => {
  console.log('estoy en obtener listas del usuario')
  const id = req.params
  console.log(id.categoriaId)
  try {
    const productos = await Producto.find({ categoria: id.categoriaId });
    res.json(productos)
  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error')
  }
};


// d obtener todos los productos
export const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  return res.json(productos);
};



// d actualziar producto por ID
export const actualizarProducto = async (req, res) => {
  const updatedProduct = await Producto.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};


// d eliminar producto
export const eliminarProduct = async (req, res) => {
  const { productId } = req.params;

  await Producto.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
};


