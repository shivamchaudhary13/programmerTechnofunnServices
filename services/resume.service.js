import fs from 'fs/promises';
import path from 'path';
import Users from '../models/users.model.js';
import JobOpening from '../models/jobOpening.model.js';

const uploadResume = async(requestBody) => {
    let result;
    const EntityDestination = `resumeFiles`;
    await fs.mkdir(EntityDestination, { recursive: true });

    const fileName = path.parse(requestBody.formData.files.resume[0].originalFilename).name;
    const oldPath = path.resolve(requestBody.formData.files.resume[0].filepath);
    const newPath = path.posix.join(EntityDestination, requestBody.formData.files.resume[0].originalFilename);
    const absolutePath = path.resolve(newPath);
    await fs.copyFile(oldPath, absolutePath);
    // Remove the temporary file
    await fs.unlink(oldPath);

    await Users.updateOne({_id: requestBody.formData.userId[0]},{$set: {resume: requestBody.formData.fileName[0]}})
    await JobOpening.updateOne({_id: requestBody.formData.jobId[0]},{$set: {jobApplied: true}})
    result = {statusCode: 200,message: "Resume uploaded successfully"};
    return result;
}

export default {uploadResume}