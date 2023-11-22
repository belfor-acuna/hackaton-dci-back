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
});

const userModel = mongoose.model("complaint", complaintSchema);

export default complaintModel;