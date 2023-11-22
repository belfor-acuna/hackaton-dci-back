import * as complaintsUseCase from "../../core/use-cases/complaint.use-case.js";

async function getComplaints(req, res) {

    try {
        const result = await complaintsUseCase.listComplaints();
    
        if (result.error) {
        return res.status(result.status).send({ error: result.error });
        }

        return res.status(result.status).send({ quejas:result });
  
      } catch (error) {
  
        console.error(error);
        return res.status(500).send({ error: error.message });
        
      }
}

async function uploadComplaint(req,res){

}

export { getComplaints, uploadComplaint }