import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
	description: {
		type: String,
	},
	category: {
		type: String,
        required:true,
	},
	subcategory: {
		type: String,
        required:true,
	},
	title:{
		type:String,
	},
    photoURL: {
        type: String,
        required: false,
    },
	status: {
        type: String,
        required: false,
    },
	userRut:{
		type: String
	}

});

const complaintModel = mongoose.model("Complaint", complaintSchema);

export default complaintModel;