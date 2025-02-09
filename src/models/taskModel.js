import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
   title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now
    },
    status:{
        type:Boolean,
        default: true,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{
    timestamps: true
})
export default mongoose.model("Task",taskSchema);