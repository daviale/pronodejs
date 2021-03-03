import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id)
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles
    });
  } catch (error) {
    console.error(error);
  }
};



// d obtener todos los usuarios
export const getUsers = async (req, res) => {
  const productos = await User.find();
  return res.json(productos);
};




// d obener usuario
export const getUser = async (req, res) => {
  const { userId } = req.params;
  const usuario = await User.findById(userId);
  res.status(200).json(usuario);

};




//d actualizar usuarios
export const actualizarUsuario = async (req, res) => {
  console.log('entre a la funcion')
  const actualizar = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(actualizar);
  
};
