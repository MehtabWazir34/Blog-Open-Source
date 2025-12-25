import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // email:{
    //     type: email,
    //     required: true,
    // },
    profileImage:{
        type:String,
    },

    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    token: {
        type: String,

    },
    verified:{
        type: Boolean,
        default: false,
    }
    
}, {timestamps: true})

const User  = mongoose.model("User", userSchema);
export default User;