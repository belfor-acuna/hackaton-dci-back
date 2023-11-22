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
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const photoURL = req.body.photoURL;
    try {
        const result = await requestsUseCase.uploadRequest(title,description,category,subcategory,photoURL);
    
        if (result.error) {
          return res.status(result.status).send({ error: result.error });
        }
    
        return res.status(result.status).send({ ...result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

export { getRequests,uploadRequest }