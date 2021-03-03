import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: String,
    peso: String,
    medida: String,
    categoria: {
      type: Schema.Types.ObjectId,
      ref: "Categoria"
    },
    precio: Number,
    imgURL: String,
    estado: Boolean,
  },


  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Producto", productoSchema);
