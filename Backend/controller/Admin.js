const AdminSchema = require("../model/AdminSchema");
const bcrypt = require("bcrypt");

// admin page apply here so we get
exports.Admin = async (req, res) => {
  try {
    const { AdminID, name } = req.body;
    // check AdminId exist or not
    const AdminDB = await AdminSchema.create({ AdminID, name });
    const AdminIDs = await AdminSchema.findOne({ AdminID });

    let AdminIDChecker;
    try{
        AdminIDChecker = await bcrypt.hash( AdminID, 10);
    }
    catch{
        return res.status(500).json({
            Success: false,
            message: "Admin ID not matched sir ! kindly wa",
          });
    }
    
    return res.status(200).json({
      success: true,
      data:AdminDB,
      message: "Data saved Succesfully",
    });
  } catch {

    return res.status(400).json({
        success: false,
        message: "Data not saved Succesfully",
      });
  }
};
