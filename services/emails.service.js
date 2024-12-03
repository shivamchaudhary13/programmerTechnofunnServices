import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "programmertechnofunn@gmail.com",
    pass: "vllk dygc yhwg sjnv",
  },
});

/* istanbul ignore next */
transport
  .verify()
  .then(() => console.log("Connected to email server"))
  .catch((error) => {
    console.error("Unable to connect to email server:", error);
  });

const sendEmail = async (to, bcc, cc, subject, body) => {
  console.log(body);

  try {
    const msg = {
      from: "programmertechnofunn@gmail.com",
      to: to,
      bcc: bcc,
      cc: cc,
      subject: subject,
      template: body.template,
      context: {
        user: body.user,
        otp: body.otp,
        email: body.email,
        jobProfile: body.jobProfile,
        skills: body.skills,
        location: body.location,
        company: body.company,
        recuiterEmail: body.recuiterEmail,
      },
    };
    await mail().sendMail(msg);
  } catch (error) {
    console.log(error);
  }
};

const mail = () => {
  return transport.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".handlebars",
        partialsDir: "templates/",
        layoutsDir: "templates/",
        defaultLayout: false,
      },
      viewPath: "templates/",
      extName: ".handlebars",
    })
  );
};

const emailVerification = (requestBody, randomSixDigit) => {
  const subject = "Email Verification";
  let body = {
    template: "signUp/email-verification",
    user: requestBody.firstName,
    otp: randomSixDigit,
  };
  sendEmail(requestBody.email, "", "", subject, body);
};

const sentInvitation = (candidateData, link) => {
  const subject = "Job Seeker Form";
  let body = {
    template: "jobs/jobSeeker",
    user: candidateData.firstName,
    link: `${link}`,
  };
  sendEmail(candidateData.email, "", "", subject, body);
};

const sentJobInvite = (bodyData) => {
  const subject = "Job Invitation";
  let body = {
    template: "jobs/jobOpening",
    user: bodyData.data.name,
    email: bodyData.data.email,
    jobProfile: bodyData.data.jobProfile,
    skills: bodyData.data.skills,
    location: bodyData.data.location,
    company: bodyData.data.company,
    recuiterEmail: bodyData.data.recuiterEmail,
    // link: `${link}`
  };
  sendEmail(bodyData.data.email, "", "", subject, body);
};
export default { sendEmail, emailVerification, sentInvitation, sentJobInvite };
