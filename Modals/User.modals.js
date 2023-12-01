import mongoose, { Schema } from 'mongoose';

const user = new Schema({
    name: {
        type: String       //aisa bhi karsakte hai
    },
    email: String,
    password: String,
    cart: [String],  
})

export default mongoose.model("User", user);