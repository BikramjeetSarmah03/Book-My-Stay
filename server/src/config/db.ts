import mongoose from "mongoose";
import "dotenv/config";

export const connectDatabase = async () => {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) throw Error("DATABASE_URL not found");

  await mongoose
    .connect(DATABASE_URL)
    .then((data) => {
      console.log(`Database connected at HOST: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("Error in connecting Database");
      console.error(err);
    });
};
