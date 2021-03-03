import User from "../models/User";
import Role from "../models/Role";

import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { username, email, password, roles } = req.body;
    // Creating a new User Object


    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    // checking for roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 864000, // 24 hours
    });

    return res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};



export const signin = async (req, res) => {
  try {
    // extraer 
    const { email, password } = req.body
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: email }).populate(
      "roles"
    );

    if (!email && !password) return res.status(400).json({ message: "los campos estan vacios" });

    if (!userFound) return res.status(400).json({ message: "el usuario no existe" });

    const matchPassword = await User.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "contraseña incorrecta",
      });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 2629800, // 1 mes
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};



export const usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await User.findById(req.userId).select('-password');
    res.json({ usuario });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'no existe este usuario, loguearse ' })
  }
}