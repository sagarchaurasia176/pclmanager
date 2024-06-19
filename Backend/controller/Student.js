const bcrypt = require("bcrypt");
// schema creation apply here so we get
const StudentSchema = require("../model/StudentSchema");
// student controller apply here so we get
exports.StudentForm = async (req, res) => {
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

    // let's check the USN validataion first here
    let StudentUsnChecker;
    try {
      StudentUsnChecker = await bcrypt.hash(Usn, 10);
    } catch {
      return res.status(500).json({
        Success: false,
        message: "Your Data is not saved talk to admin",
      });
    }

    // now create the these properties into the db
    const StudentData = await StudentSchema.create({
      name,
      Usn: StudentUsnChecker,
      Branch,
    });
   
    res.status(200).json({
      Success: true,
      message: "Your Data is Saved Successfully ",
    });


  } catch {
    res.status(500).json({
      Success: false,
      message: "Your Data is not saved talk to admin",
    });
  }
};
