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
    const rut = req.body.rut;
    const description = req.body.description;
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const photoURL = req.body.photoURL;
    const phone = req.body.phone;

    try {
        const result = await complaintsUseCase.uploadComplaint(rut,description,category,subcategory,photoURL,phone);
  
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

async function getComplaintDetail(req,res){
  const complaintId = req.params.complaintId;
  try{
    const result = await complaintsUseCase.getComplaintDetail(complaintId);

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

export { getComplaints, uploadComplaint, updateComplaintStatus, getComplaintDetail }