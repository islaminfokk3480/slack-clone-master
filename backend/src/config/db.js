import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("✅ MongoDB connected successfully:", conn.connection.host);
    return conn; // <-- important
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB", error.message);
    throw error;
  }
};
