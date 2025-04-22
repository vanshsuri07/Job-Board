import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoute.js";

dotenv.config();
connectDB();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Application",
      description: "Node Expressjs Job Application",
    },
    servers: {
      url: "http://localhost:8080",
    },
  },
  apis: ["./routes/*.js"],
};
const spec = swaggerDoc(options);
const app = express();

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("*/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);
app.use(errorMiddleware);
const PORT = process.env.PORT || 8080;
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    success: false,
    message: "Something went wrong!",
    error: err.message,
  });
});
app.listen(PORT, () => {
  console.log(
    `Node Server running In ${process.env.DEV_MODE} Mode on port no.${PORT}`
  );
});
