import express from "express";
import { addComment, deleteomment, getComments } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteomment);
router.get("/:videoId", getComments);

export default router;