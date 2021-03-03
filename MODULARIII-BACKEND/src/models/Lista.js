import { Schema, model } from "mongoose";

const ListaSchema = new Schema(

  {
    nombre: String,
    productos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Producto",
      }
    ],
    creador: {
      type:Schema.Types.ObjectId,
      ref: "User",
    },
  },
 
  
  {
    timestamps: true,
    versionKey: false
  }
);





export default model("Lista", ListaSchema);
