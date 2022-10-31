import Hotel from "../models/Hotel.js"

export const store = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}


export const update = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json(updateHotel)
    } catch (error) {
        next(error)
    }
}


export const destroy = async (req, res, next) => {
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteHotel)
    } catch (error) {
        next(error)
    }
}


export const getByID = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        next(error)
    }
}


export const getAll = async (req, res, next) => {
    try {
        const getHotels = await Hotel.find()
        res.status(200).json(getHotels)
    } catch (error) {
        next(error)
    }
}