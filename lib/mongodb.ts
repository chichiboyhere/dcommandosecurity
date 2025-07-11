// import mongoose from "mongoose";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const cached = (global as any).mongoose || { conn: null, promise: null };

// export const connectDB = async (MONGODB_URI = process.env.MONGODB_URI) => {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

//   cached.promise = cached.promise || mongoose.connect(MONGODB_URI);

//   cached.conn = await cached.promise;

//   return cached.conn;
// };

// lib/mongodb.ts

import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) throw new Error("MONGODB_URI not defined");

  await mongoose.connect(mongoURI);
  isConnected = true;
}
