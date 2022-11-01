import express from "express"
import { store, destroy, update, getByID, getAll } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, store)

// UPDATE
router.put("/:id", verifyAdmin, update)

// DELETE
router.delete("/:id", verifyAdmin, destroy)

// GET BY ID
router.get("/:id", getByID)

// GET ALL
router.get("/", getAll)

export default router