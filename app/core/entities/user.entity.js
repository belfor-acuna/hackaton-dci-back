import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	claveUnica: {
		type: String,
        required:true,
	},
	rut: {
		type:String,
		required:true,
		unique:true
	},
	name:{
		type:String,
	},
	surname:{
		type:String,
	},
	address:{
		type:String,
	},
    phone: {
        type: String,
        required: false,
    },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;