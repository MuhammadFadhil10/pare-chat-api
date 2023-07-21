import express from "express";
import controller from "../controller/Controller";

const router = express.Router();
const { search } = controller.User;

// search
router.post("/user/search/:query", search);

export default router;
