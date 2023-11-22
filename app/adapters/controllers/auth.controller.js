import * as authUseCase from '../../core/use-cases/auth.use-case.js';

export async function loginUser(req, res) {
    const claveUnica = req.claveUnica;

    try {
      const result = await authUseCase.loginUser(claveUnica);
  
      if (result.error) {
        return res.status(result.status).send({ error: result.error });
      }
  
      return res.status(result.status).send({ usuario:result });

    } catch (error) {

      console.error(error);
      return res.status(500).send({ error: error.message });
      
    }
  }