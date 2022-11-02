import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

export const store = async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}


export const update = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json(updateRoom)
    } catch (error) {
        next(error)
    }
}


export const destroy = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
        const deleteRoom = await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(deleteRoom)
    } catch (error) {
        next(error)
    }
}


export const getByID = async (req, res, next) => {
    try {
        const getRoom = await Room.findById(req.params.id)
        res.status(200).json(getRoom)
    } catch (error) {
        next(error)
    }
}


export const getAll = async (req, res, next) => {
    try {
        const getRooms = await Room.find()
        res.status(200).json(getRooms)
    } catch (error) {
        next(error)
    }
}