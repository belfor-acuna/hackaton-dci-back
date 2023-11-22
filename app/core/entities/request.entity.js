import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
        unique:true,
	},
	category: {
		type: String,
        required:true,
	},
	titulo:{
		type:String,
	},
    photo: {
        type: String,
        required: false,
    },
	status: {
        type: String,
        required: false,
    },
});

const requestModel = mongoose.model("Request", requestSchema);

export default requestModel;