import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://anand123:anand123@cluster0.ycb0nnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
      console.log('DB connected');
    })
    .catch((err) => {
      console.error('DB connection error:', err);
    });
};
