import Pedidos from "../models/Pedidos";
import { s3 } from "../middlewares/upload";


import crypto from 'crypto'
import { send } from "process";


// d crear producto



export const listaProductos = async(req, res)=> {
    res.json("listar productos")

};


export const crearPedido = async (req, res) => {
    res.json("pedidos")

};





// d obtener pr
// d obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  const pedidos = await Pedidos.find();
  return res.json(pedidos);
};





