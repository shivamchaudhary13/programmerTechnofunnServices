import formidable from "formidable";

const customParserMiddleware = (req, res, next) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Error parsing form-data:", err);
      return res.status(500).send("Error parsing form data");
    }
    req.formData = { ...fields, files };
    next();
  });
};

export default customParserMiddleware;
