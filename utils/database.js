import mongoose from 'mongoose';
const connectionString = "mongodb://localhost:27017/programmerTechnofunn"
mongoose.connect(connectionString,{}).then(() => {
    console.log("connected to mongodb");
})

export default mongoose;