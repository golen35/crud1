import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
      name:{
        type:String,
        required: true
      },
      email:{
        type:String,
        required: true
      },
      address:{
        type:String,
        required: true
      },
      photo:{
        data: Buffer,
        contenType: String
      }
})

export default mongoose.model("users", userSchema);