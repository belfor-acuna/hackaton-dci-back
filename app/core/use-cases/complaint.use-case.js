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

async function uploadComplaint(title,description,category,subcategory,photoURL){
    try{

        if (!title) {
            throw new Error('Falta campo titulo');
          }
        if (!description) {
            throw new Error('Falta campo descripción');
          }
        const complaint = await Complaint.create({
            title:title,
            description:description,
            category:category,
            subcategory:subcategory,
            photoURL:photoURL,
            status:"Pendiente"
        })

        return { complaint, status: 200 };
    }
    catch(error){
        console.log(error)
        return { error: error.message, status: 500 };
    }
     
}

async function updateComplaintStatus(status,complaintID){

    if(!status){
        throw new Error('Falta un estado para modificar');
    }

    if(!complaintID){
        throw new Error('Falta una ID');
    }

    try{

        const selectedComplaint = await Complaint.findById(complaintID);

        if(!selectedComplaint){
            throw new Error('No existe un reclamo con esa ID');
        }

        selectedComplaint.status = status;
        await selectedComplaint.save();

        return { selectedComplaint, status:200 }
        
    }
    catch(error){
        console.error(error);
        return { error: error.message, status: 500 };
    }
    
}

export {listComplaints,uploadComplaint,updateComplaintStatus}