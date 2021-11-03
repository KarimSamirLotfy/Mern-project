import mongoose from "mongoose";

const post_schema= mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    likeCount:{
        type:Number,
        default:0
    },
    Date:{
        type:Date,
        default:new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', post_schema)

export default PostMessage;