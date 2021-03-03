import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";

import productRoutes from "./routes/productos.routes";
import usersRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import categoriaRoutes from "./routes/categoria.routes";
import listaRoutes from "./routes/listas.routes";
import uploadsRoutes from "./routes/upload.routes";
import pedidosRoutes from "./routes/pedidos.routes";
import direccionRoutes from "./routes/direccion.routes";
import { createRoles, createAdmin, crearCategorias } from "./libs/initialSetup";



import path from 'path'



const app = express();
createRoles();
createAdmin();
crearCategorias();

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4500);
app.set("json spaces", 4);


// Middlewares
// app.use(express.json({ extended: true }))


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Products API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});



app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use("/api/productos", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/listas", listaRoutes);
app.use("/api/uploads", uploadsRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/direcciones", direccionRoutes);

export default app;
