import * as complaintsUseCase from "../../core/use-cases/complaint.use-case.js";

async function getComplaints(req, res) {

    try {
        const result = await complaintsUseCase.listComplaints();
    
        if (result.error) {
        return res.status(result.status).send({ error: result.error });
        }

        return res.status(result.status).send({ ...result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

async function uploadComplaint(req,res){
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const photoURL = req.body.photoURL;

    try {
        const result = await complaintsUseCase.uploadComplaint(title,description,category,subcategory,photoURL);
  
        if (result.error) {
           return res.status(result.status).send({ error: result.error });
        }
  
        return res.status(result.status).send({ ...result });

    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error: error.message });
      
    }
}

async function updateComplaintStatus(req,res){
    const complaintId = req.params.complaintId;
    const status = req.body.status;
    try{

      const result = await complaintsUseCase.updateComplaintStatus(status,complaintId);

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

export { getComplaints, uploadComplaint, updateComplaintStatus }