import JobOpening from "../models/jobOpening.model.js";

const createJobOpening = async (requestBody) => {
  let result = {};
  await JobOpening.create({
    jobRole: requestBody.body.jobRole,
    skills: requestBody.body.skill,
    responsibilities: requestBody.body.responsibilities,
    salary: requestBody.body.minSalary + "-" + requestBody.body.maxSalary,
    noticePeriod: requestBody.body.noticeperiod,
    qualification: requestBody.body.qualification,
    location: requestBody.body.location,
    experience:
      requestBody.body.minExperience + "-" + requestBody.body.maxExperience,
    workMode: requestBody.body.workMode,
    company: requestBody.body.company,
  });
  result = { statusCode: 200, message: "job opening are created successfully" };
  return result;
};

const getJobOpening = async () => {
  let result = await JobOpening.find({ active: true });
  return result;
};

const getjobs = async (requestBody) => {
  const result = await JobOpening.findOne({
    _id: requestBody.params.jobOpeningId,
  });
  return result;
};

const jobApply = async (requestBody) => {
  let result = {};
  await JobOpening.updateOne(
    { _id: requestBody.params.jobOpeningId },
    { $set: { jobApplied: true } }
  );
  result = { statusCode: 200, message: "Job Applied Successfully!!" };
  return result;
};
const saveJob = async (requestBody) => {
  let result = {};
  await JobOpening.updateOne(
    { _id: requestBody.params.jobOpeningId },
    { $set: { savedJob: true } }
  );
  result = { statusCode: 200, message: "Job Saved Successfully!!" };
  return result;
};

const updateJobOpening = (requestBody) => {};

const deleteJobOpening = async (requestBody) => {
  let result = {};
  await JobOpening.updateOne(
    { _id: requestBody.query.id },
    { $set: { active: false } }
  );
  result = { statusCode: 200, message: "Job deleted successfully!!" };
  return result;
};

const removeJob = async (reqBody) => {
    let result;
  if (reqBody.body.remove === 'Saved') {
    await JobOpening.updateOne(
      { _id: reqBody.params.jobOpeningId },
      { $set: { savedJob: false } }
    );
  } else if (reqBody.body.remove === 'Applied') {
    await JobOpening.updateOne(
      { _id: reqBody.params.jobOpeningId },
      { $set: { jobApplied: false } }
    );
  }
  result = {statusCode:200,message: "Job Removed Successfully!!"}
  return result;
};
export default {
  createJobOpening,
  getJobOpening,
  getjobs,
  updateJobOpening,
  deleteJobOpening,
  jobApply,
  saveJob,
  removeJob,
};
