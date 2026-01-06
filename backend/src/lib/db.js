import mongoose from "mongoose"

export const connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGO_URI)
   if (!MONGO_URI) throw new Error("MONGO_URI is not set");

    console.log("MongoDb Connection Successfully!",conn.connection.host)
  }catch (error) {
     console.error("Error connecting to MongoDB!", error);
     process.exit(1);
    }
  }
