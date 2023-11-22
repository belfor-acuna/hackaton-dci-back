import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
	description: {
		type: String,
	},
	category: {
		type: String,
	},
	subcategory: {
		type: String,
	},
	title:{
		type:String,
	},
	status: {
        type: String,
        required: false,
    },
	userRut:{
		type: String
	}
});

const requestModel = mongoose.model("Request", requestSchema);

export default requestModel;