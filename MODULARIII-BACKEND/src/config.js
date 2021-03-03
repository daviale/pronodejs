import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://yelsino:yelsino321@cluster0.blx9i.mongodb.net/tienda",
  PORT: process.env.PORT || 4300,
  SECRET: 'products-api'
};
