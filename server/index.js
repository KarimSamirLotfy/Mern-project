import express from 'express';
import  mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
const app= express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to local DB make sure it is working 
const PORT= process.env.PORT || 5000;
mongoose.connect(`mongodb://localhost:27017/myapp`, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))})
    .catch((err)=>{console.error(err.message)})
console.log('connected to DB')
// send all posts the posts method
app.use('/posts', postRoutes)