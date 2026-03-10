import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

dotenv.config({
  path: "./.env",
}); // Load environment variables from .env file

const startServer = async () => {
  try {
    await connectDB(); // Connect to the database
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error; // Rethrow the error to be caught by the outer catch block
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer(); // Start the server
