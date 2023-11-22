import Request from "../entities/request.entity.js";

async function listRequests() {
  try {
    const requests = await Request.find();
    
    if (requests.length === 0) {
      return { error: "No hay solicitudes", status: 200};
    }

    return { requests, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: error.message, status: 500 };
  }
}

async function uploadRequest(rut,description,category,subcategory,phone){

    if (!rut || !(rut.length === 11 || rut.length === 12)) {

        throw new Error('El campo rut no es válido');
    }

    if (phone && !(phone.length === 9)) {
      throw new Error('El campo telefono no es válido');
    }

    try{

        if (!description) {
            throw new Error('Falta campo descripción');
          }
        const request = await Request.create({
            userRut:rut,
            description:description,
            category:category,
            subcategory:subcategory,
            status:"Pendiente",
            userPhone:phone
        })

        return { request, status: 200 };
    }
    catch(error){
        console.log(error)
        return { error: error.message, status: 500 };
    }
     
}

async function updateRequestStatus(status,requestID){

  if(!status){
      throw new Error('Falta un estado para modificar');
  }

  if(!requestID){
      throw new Error('Falta una ID');
  }

  try{

      const selectedRequest = await Request.findById(requestID);

      if(!selectedRequest){
          throw new Error('No existe una solicitud con esa ID');
      }

      selectedRequest.status = status;
      await selectedRequest.save();

      return { selectedRequest, status:200 }
      
  }
  catch(error){
      console.error(error);
      return { error: error.message, status: 500 };
  }
  
}

async function getRequestDetail(requestId){
  if(!requestId){
      throw new Error('Falta una ID');
  }

  try{
      const selectedRequest = await Request.findById(requestId);
      if(!selectedRequest){
          throw new Error('No existe una solicitud con esa ID');
      }
      return{ selectedRequest, status:200}
  }

  catch(error){
      console.error(error);
      return { error: error.message, status: 500 };
  }
}

export {listRequests, uploadRequest, updateRequestStatus, getRequestDetail}