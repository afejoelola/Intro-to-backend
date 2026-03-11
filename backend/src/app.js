import express from "express";
import userRouter from "./routes/user.route.js";

const app = express(); // Create an Express app

app.use(express.json()); // Middleware to parse JSON bodies

//routes import

//routes declaration
app.use("/api/v1/users", userRouter);

//example route: http://localhost:4000/api/v1/users/register

export default app;
