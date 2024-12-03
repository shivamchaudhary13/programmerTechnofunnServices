import mongoose from "mongoose";

const jobOpeningSchema = new mongoose.Schema({
    jobRole: {
        type: String
    },
    skills: {
        type: Array
    },
    responsibilities: {
        type: String
    },
    salary: {
        type: String
    },
    noticePeriod: {
        type: String
    },
    qualification: {
        type: Array
    },
    location: {
        type: Array
    },
    experience: {
        type: String
    },
    workMode: {
        type: String
    },
    company: {
        type: String
    },
    vacancy: {
        type: String
    },
    jobApplied: {
        type: Boolean,
        default: false
    },
    savedJob: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

const JobOpening = await mongoose.model('jobOpening',jobOpeningSchema)

export default JobOpening;