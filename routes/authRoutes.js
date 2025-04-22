import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";
import swaggerJSDoc from "swagger-jsdoc";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const router = express.Router();

router.post("/register", limiter, registerController);
router.post("/login", limiter, loginController);
export default router;
