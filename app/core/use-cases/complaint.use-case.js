import Complaint from "../entities/complaint.entity.js";

async function listComplaints(){
    try{
        const complaints = await Complaint.find();
        if (!complaints) {
            return { error:"No hay reclamos", status: 404 };
        }
        return { complaints, status: 200 };
    }
    catch{
        console.error(error);
      return { error: error.message, status: 500 };
    }
}

export {listComplaints}