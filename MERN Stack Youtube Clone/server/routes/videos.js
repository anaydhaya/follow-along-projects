import express from "express";
import { addVideo, addView, deleteVideo, getVideo, random, search, sub, getByTags, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Create a video
router.post("/", verifyToken, addVideo);

// Update video
router.put("/:id", verifyToken, updateVideo);

// Delete video
router.delete("/:id", verifyToken, deleteVideo);

// Get video
router.get("/find/:id", getVideo);

// View video
router.put("/view/:id", addView);

// Trending videos
router.get("/trend", trend);

// Random videos
router.get("/random", random);

// Subscribed videos
router.get("/sub", verifyToken, sub);

// Get by tags
router.get("/tags", getByTags);

// Get by title
router.get("/search", search);

export default router;