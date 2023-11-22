import Complaint from "../entities/complaint.entity.js";

async function listComplaints(){
    try{
        const complaints = await Complaint.find();
        if (complaints.length === 0) {
            return { error:"No hay reclamos", status: 200 };
        }
        
        return { complaints, status: 200 };
    }

    catch{
        console.error(error);
      return { error: error.message, status: 500 };
    }
}

export {listComplaints}