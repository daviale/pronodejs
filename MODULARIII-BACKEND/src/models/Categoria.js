import { Schema, model } from 'mongoose'

export const CATEGORIAS = ["frutas", "abarrotes", "vegetales"];

const CategoriaSchema = new Schema(
    {
        nombre: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default model("Categoria", CategoriaSchema)