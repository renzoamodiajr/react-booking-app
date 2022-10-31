import express from "express"
import { store, destroy, update, getByID, getAll } from "../controllers/hotel.js"

const router = express.Router()

// CREATE
router.post("/", store)

// UPDATE
router.put("/:id", update)

// DELETE
router.delete("/:id", destroy)

// GET BY ID
router.get("/:id", getByID)

// GET ALL
router.get("/", getAll)

export default router