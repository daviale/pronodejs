import Role from "../models/Role";
import User from "../models/User";
import Categoria from "../models/Categoria";

import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

// d crear categorias iniciales
export const crearCategorias = async () => {
  try {
    const count = await Categoria.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Categoria({ nombre: "vegetales" }).save(),
      new Categoria({ nombre: "frutas" }).save(),
      new Categoria({ nombre: "abarrotes" }).save(),
    ])
    console.log("***** CATEGORIAS *****")
    console.log(values)
  } catch (error) {
    console.error(error)
  }
}



// d crear usuario admin inicial
export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
};
