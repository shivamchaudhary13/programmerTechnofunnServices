import mongoose from "mongoose"

const onlineTestSchema = new mongoose.Schema({
    course: {
        type: String
    },
    level: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    active: {
        type: Boolean
    }
})

const OnlineTest = await mongoose.model('onlineTest',onlineTestSchema);
export default OnlineTest;