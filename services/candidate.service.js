import Users from "../models/users.model.js";
import emailsService from "./emails.service.js";

const candidateInvite = async (requestBody) => {
  const candidateData = await Users.findOne({ _id: requestBody.candidateId });
  console.log(candidateData, "candidateData");
  await Users.updateOne(
    { _id: requestBody.candidateId },
    {
      $set: {
        buttonStatus: "job invite",
        status: "completion invited",
      },
    }
  );

  await emailsService.sentInvitation(candidateData, requestBody.url);
  return "Candidate Invited Succesfully!!";
};

const updateCandidateDetails = async (request) => {
  await Users.updateOne(
    { _id: request.query.userId },
    {
      $set: {
        skills: request.body.skills,
        currentLocation: request.body.currentLocation,
        preferredLocation: request.body.preferredLocation,
        experience: request.body.experience,
        status: request.body.status,
      },
    }
  );
  return "Form Details Submitted Successfully,we will reach out to you soon!!";
};

const jobOpeningInvite = async (requestBody) => {
  console.log(requestBody, "requestBody");
  await Users.updateOne(
    { _id: requestBody.data.userId },
    {
      $set: {
        buttonStatus: requestBody.data.buttonStatus,
        status: requestBody.data.status,
      },
    }
  );
  await emailsService.sentJobInvite(requestBody);
  return "job Invitation Sent Successfully!!";
};

const getAllCandidate = async () => {
  const allUsers = await Users.find();
  const newRegUsers = await Users.find({status: 'new registered'});
  const completionInvitedUsers = await Users.find({status: 'completion invited'});
  const formCompletedUsers = await Users.find({status: 'Form Completed'});
  const interviewPendingUsers = await Users.find({status: 'interview pending'});
  const selectedUsers = await Users.find({status: 'selected'});
  const joinedUsers = await Users.find({status: 'joined'});

  return [
    {label: 'totalCandidates', value: allUsers.length},
    {label: 'newRegCandidates', value: newRegUsers.length},
    {label: 'completionInvitedCandidates',value: completionInvitedUsers.length},
    {label: 'formCompletedCandidates',value: formCompletedUsers.length},
    {label: 'interviewPendingCandidates',value: interviewPendingUsers.length},
    {label: 'selectedCandidates',value: selectedUsers.length},
    {label: 'joinedCandidates',value: joinedUsers.length}
  ]
};

export default {
  candidateInvite,
  updateCandidateDetails,
  jobOpeningInvite,
  getAllCandidate,
};
