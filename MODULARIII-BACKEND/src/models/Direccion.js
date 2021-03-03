import { Schema, model } from "mongoose";
const direccionSchema = new Schema(
    {
nombre: String,
barrio: String,
referencia:String,

user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
},


{
  timestamps: true,
  versionKey: false
}
);

export default model("Direccion", direccionSchema );