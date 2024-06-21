// schema creation apply here so we get
const StudentSchema = require("../model/StudentSchema");
// student controller apply here so we get
exports.Student = async (req, res) => {
  try {
    // destructure the studetn schema
    const { name, Usn, Branch } = req.body;
    // find by the name here => its check that the name is exist or not
    const existingStudentName = await StudentSchema.findOne({ name });
    if (existingStudentName) {
      return res.status(400).json({
        Success: false,
        message: "Your Name is already exist !",
      });
    }

    // now create the these properties into the db
    const StudentData = await StudentSchema.create({
      name,
      Usn,
      Branch,
    });

    res.status(200).json({
      Success: true,
      data: StudentData,
      message: "Your Data is Saved Successfully ",
    });
  } catch(error){
    return res.status(500).json({
      Success: false,
      error:error.message,
      message: "Your Data is not saved talk to admin",
    });
  }
};
