import * as requestsUseCase from "../../core/use-cases/request.use-case.js";

async function getRequests(req, res) {

    try {
        const result = await requestsUseCase.listRequests();
    
        if (result.error) {
        return res.status(result.status).send({ error: result.error });
        }

        return res.status(result.status).send({ solicitudes:result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

async function uploadRequest(req,res){

}

export { getRequests,uploadRequest }