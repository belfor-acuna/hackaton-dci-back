import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
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

const complaintModel = mongoose.model("Complaint", complaintSchema);

export default complaintModel;