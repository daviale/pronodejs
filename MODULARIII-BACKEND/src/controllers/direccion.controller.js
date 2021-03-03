
import Direccion from "../models/Direccion";
import { s3 } from "../middlewares/upload";


import crypto from 'crypto'
import { send } from "process";


// d crear producto



export const listarDirecciones = async(req, res)=> {
    res.json("listar direcciones")

};


export const crearDireccion = async (req, res) => {
    res.json("crear direccion")

};





// d obtener pr
// d obtener todos los pedidos





