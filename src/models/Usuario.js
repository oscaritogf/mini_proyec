const supabase = require('../config/supabase');


class UserModel {
    async createUser(nombre, apellido, correo) {
      const { data, error } = await supabase.rpc('create_user', { p_nombre: nombre, p_apellido: apellido, p_correo: correo });
      if (error) throw error;
      return data;
    }
  
    async readUser(id) {
      const { data, error } = await supabase.rpc('read_user', { p_id: id });
      if (error) throw error;
      return data;
    }
  
    async updateUser(id, nombre, apellido, correo) {
      const { data, error } = await supabase.rpc('update_user', { p_id: id, p_nombre: nombre, p_apellido: apellido, p_correo: correo });
      if (error) throw error;
      return data;
    }
  
    async deleteUser(id) {
      const { data, error } = await supabase.rpc('delete_user', { p_id: id });
      if (error) throw error;
      return data;
    }
  }
  
  module.exports = new UserModel();