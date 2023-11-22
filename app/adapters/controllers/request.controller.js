import * as requestsUseCase from "../../core/use-cases/request.use-case.js";

async function getRequests(req, res) {

    try {
        const result = await requestsUseCase.listRequests();
    
        if (result.error) {
        return res.status(result.status).send({ error: result.error });
        }

        return res.status(result.status).send({ ...result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

async function uploadRequest(req,res){

    const rut = req.body.rut;
    const description = req.body.description;
    const category = req.body.category;
    const subcategory = req.body.subcategory;

    try {
        const result = await requestsUseCase.uploadRequest(rut,description,category,subcategory);
    
        if (result.error) {
          return res.status(result.status).send({ error: result.error });
        }
    
        return res.status(result.status).send({ ...result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

async function updateRequestStatus(req,res){
    const requestId = req.params.requestId;
    const status = req.body.status;
    try{

      const result = await requestsUseCase.updateRequestStatus(status,requestId);

      if (result.error) {
        return res.status(result.status).send({ error: result.error });
      }
  
      return res.status(result.status).send({ ...result });
    }

    catch(error){

        console.error(error);
        return res.status(500).send({ error: error.message });
        
    }
}

async function getRequestDetail(req,res){
  const requestId = req.params.requestId;
  try{

    const result = await requestsUseCase.getRequestDetail(requestId);
    if (result.error) {
      return res.status(result.status).send({ error: result.error });
    }

    return res.status(result.status).send({ ...result });
  }
  catch(error){

    console.error(error);
    return res.status(500).send({ error: error.message });

  }
}

export { getRequests,uploadRequest, updateRequestStatus, getRequestDetail }