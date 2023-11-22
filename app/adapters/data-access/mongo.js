import mongoose from "mongoose";
import { MONGO_URI } from "../../config/environment.js";

export default function connectDB() {
	return mongoose
		.connect(MONGO_URI)
		.then(async () => {
			console.log(`MongoDB contectada en la ruta: ${MONGO_URI}`);
			await registerModels();
			return true;
		})
		.catch((error) => {
			console.log(`MongoDB no pudo conectarse. Error: ${error}`);
			return false;
		});
}

async function registerModels() {
	await import("../../core/entities/complaint.entity.js");
	await import("../../core/entities/request.entity.js");
	await import("../../core/entities/user.entity.js");
}