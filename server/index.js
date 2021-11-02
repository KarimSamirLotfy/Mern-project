import express from 'express';
import  Mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
console.log('here')
console.log('feature 2 i guess')

console.log('some improvemnts on feature 3 + nodemon is definetly wokring')

console.log('kimo is here')

const app= express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to local DB make sure it is working 

// send all posts the posts method
app.use('/posts', postRoutes)