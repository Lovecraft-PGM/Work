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
    endDate:{
        type:Date,
        default: true,
        required: true
    },
    status:{
        type:String,
        default: "Activo",
        required: true
    },
    priority:{
        type:String,
        required:true,
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