import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    hour_zone: {
        type: String,
        required: true,
    },
    continent: {
        type: String,
        required: true,
    },
    sea_ocean: {
        type: String,
        required: true,
    },
    river: {
        type: String,
        required: true,
    },
    extension: {
        type: String,
        required: true,
    },
    population: {
        type: String,
        required: true,
    },
    easy_curiosity: {
        type: String,
        required: true,
    },
    hard_curiosity: {
        type: String,
        required: true,
    },
    climate: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    animal: {
        type: String,
        required: true,
    },
    person: {
        type: String,
        required: true,
    },
    monument: {
        type: String,
        required: true,
    },
    plate: {
        type: String,
        required: true,
    },
    flora: {
        type: String,
        required: true,
    },
    temperature: {
        type: String,
        required: true,
    },
    hemisphere: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: true,
    }
})

export default mongoose.model('City', citySchema)