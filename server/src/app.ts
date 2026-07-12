import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import departmentRoutes from "./routes/department.routes.js";

import { env } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use(
  "/api/departments",
  departmentRoutes
);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "AssetFlow Backend Running",
  });
});

app.use(errorHandler);
export default app;