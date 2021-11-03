import PostMessage from "../models/postMessages.js"
export const getPosts= async (req, res)=>{
    try {
        const post_messages= await PostMessage.find()
        console.log(post_messages)

        res.status(200).json(post_messages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
export const createPost= async (req, res)=>{
    try {
        const post= req.body;
        const new_post= new PostMessage(post);
        await new_post.save() 
        res.status(201).json(new_post)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}