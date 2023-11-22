import User from "../entities/user.entity";

export async function login(claveUnica) {
    try {

      if (!claveUnica) {
        throw new Error('Falta campo clave unica');
      }

      const existingUser = await User.findOne({ claveUnica });

      if (!existingUser) {
        return { error:"Usuario no encontrado",logged: false, status: 404 };
      }
    
      return { existingUser, status: 200 };
    } catch (error) {

      console.error(error);
      return { error: error.message, status: 500 };

    }
  }

