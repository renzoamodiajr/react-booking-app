import express from "express"
import { store, destroy, update, getByID, getAll } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Logged in!")
// })
// router.get("/verifyuser/:id", verifyUser, (req, res, next) => {
//     res.send("Can delete!")
// })
// router.get("/checkifadmin", verifyAdmin, (req, res, next) => {
//     res.send("Admin can delete!")
// })

// CREATE
router.post("/", store)

// UPDATE
router.put("/:id", verifyUser, update)

// DELETE
router.delete("/:id", verifyUser, destroy)

// GET BY ID
router.get("/:id", verifyUser, getByID)

// GET ALL
router.get("/", verifyAdmin, getAll)

export default router