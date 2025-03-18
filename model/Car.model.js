import mongoose, {mongo} from "mongoose";

const carSchema = new mongoose.Schema({
    name: String,
    model: String,
    price: Float32Array,
    variant: {
        type: String,
        enum: ["base", "high"],
        default: "base",
    },
    color: String,
    fuelType: {
        type: String,
        enum: ["petrol", "disel","CNG"],
        default: "petrol",
    },
}, {
    timestamps: true,
});

const Car = mongoose.model("Car", carSchema);

export default Car;