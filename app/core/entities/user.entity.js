import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
        unique:true,
	},
	claveUnica: {
		type: String,
        required:true,
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