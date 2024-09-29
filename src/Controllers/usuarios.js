const UserModel = require ('../models/Usuario');

class UserController {
    async createUser(req, res) {
      try {
        const { nombre, apellido, correo } = req.body;
        const user = await UserModel.createUser(nombre, apellido, correo);
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async readUser(req, res) {
      try {
        const { id } = req.params;
        const user = await UserModel.readUser(id);
        if (user.length === 0) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user[0]);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async updateUser(req, res) {
      try {
        const { id } = req.params;
        const { nombre, apellido, correo } = req.body;
        const user = await UserModel.updateUser(id, nombre, apellido, correo);
        if (user.length === 0) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user[0]);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async deleteUser(req, res) {
      try {
        const { id } = req.params;
        const user = await UserModel.deleteUser(id);
        if (user.length === 0) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado exitosamente' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = new UserController();