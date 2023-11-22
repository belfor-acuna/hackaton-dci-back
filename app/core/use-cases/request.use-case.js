import Request from "../entities/request.entity.js";

async function listRequests() {
  try {
    const requests = await Request.find();
    
    if (!requests) {
      return { error: "No hay solicitudes", status: 404 };
    }

    return { requests, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: error.message, status: 500 };
  }
}

export {listRequests}