import express  from "express";
import cors from "cors";

import authRoutes from "../routes/auth.routes.js";
import requestsRoutes from "../routes/requests.routes.js"
import complaintsRoutes from "../routes/complaints.routes.js"

import connectDB from "../data-access/mongo.js";
import {PORT} from "../../config/environment.js";

const app = express();
app.use(express.json());

const allowedOrigins = [
	'http://contacto.mtraiguen.cl:3000',
	'http://localhost:3000'
  ];

app.use(cors({
	origin: allowedOrigins
}));

app.use("/auth", authRoutes);
app.use("/complaints",complaintsRoutes);
app.use("/requests",requestsRoutes);

async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Server started on ${PORT}`);
		});
	} else {
        console.log(`Server did not start on ${PORT}`)
		process.exit();
	}
}

startSever();