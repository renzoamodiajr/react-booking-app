import express from "express"
import env from "dotenv"
import mongoose from "mongoose"
const app = express()
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookierParser from "cookie-parser"

env.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("Database connected")
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(8800, () => {
    connectDb()
    console.log("Connected to backend!")
})

// MIDDLEWARES - START
app.use(cookierParser())
app.use(express.json())

// routes
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

// error handling
app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMsg = err.message || "Something went wrong"
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: err.stack
    })
})

// MIDDLEWARES - END
