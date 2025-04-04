// This file initializes and starts the server.

import express from "express";
import dotenv from "dotenv";
import adminRoutes from "./api/v1/routes/admin/adminDashboard.routes";
import authRoutes from "./api/v1/routes/authentication.routes";

dotenv.config();
const app=express();

app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${String(process.env.PORT)}`);
});