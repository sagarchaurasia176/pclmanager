// const JWT = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const AdminSchema = require("../model/AdminSchema");
// const { error } = require("console");
// require("dotenv").config();
// // schema creation apply here so we get
// // student controller apply here so we get
// exports.MainAdmin = async (req, res) => {
//   try {
//     // destructure the studetn schema
//     const { Admin, name } = req.body;
//     // Create the admin data
 

//     // find by the name here => its check that the name is exist or not
//     const existingAdminId = await AdminSchema.findOne({ Admin });
//     if (existingAdminId) {
//       return res.status(400).json({
//         Success: false,
//         message: "Your Id is already exist !",
//       });
//     }
//     //bycrypt the admin password
//     let AdminPasswordHash;
//     try {
//       AdminPasswordHash = await bcrypt.hash(Admin, 10);
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: "Error in hashing the password",
//       });
//     }
//     const AdminData = await AdminSchema.create({
//       Admin:AdminPasswordHash,
//       name,
//     });

//     const payload = {
//       Admin: AdminData.Admin,
//       name: AdminData.name,
//       id: AdminData._id,
//     };

//     // admin password comparison here
//     if (await bcrypt.compare(Admin, 10)) {
//       // if the password mathched thne generate the jwt
//       let token = await JWT.sign(payload, process.env.JWT_SECRET, {
//         expiresIn: "2h",
//       });
//       // now apply the token into the admin id
//       AdminData.token = token;
//       AdminData.Admin = undefined;
//       // lets start to write the cokkies
//       const options = {
//         expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//         // It absent in the client side
//         httpOnly: true,
//       };
//       res.cookie("AdminLogin", token, options).status(200).json({
//         success: true,
//         token,
//         AdminData,
//         message: "Admin Log in Succesfully",
//       });
//     } else {
//       return res.status(400).json({
//         Success: false,
//         error: error.message,
//         message: "password incorrect",
//       });
//     }

    
//     // main return admin data here
//     return res.status(200).json({
//       Success: true,
//       data: AdminData,
//       message: "Your Data is  saved !",
//     });
//   } catch (er) {
//     return res.status(400).json({
//       Success: false,
//       message: "Your Data is not saved talk to admin",
//       error: er.message,
//     });
//   }
// };




const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminSchema = require("../model/AdminSchema");
require("dotenv").config();

exports.MainAdmin = async (req, res) => {
  try {
    const { Admin, name } = req.body;

    // Check if Admin ID already exists
    const existingAdmin = await AdminSchema.findOne({ Admin });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Your ID already exists!",
      });
    }

    // Hash the admin password
    let AdminPasswordHash;
    try {
      AdminPasswordHash = await bcrypt.hash(Admin, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Error in hashing the password",
      });
    }

    // Create the admin data
    const AdminData = await AdminSchema.create({
      Admin: AdminPasswordHash,
      name,
    });

    // Create the payload for JWT
    const payload = {
      Admin: AdminData.Admin,
      name: AdminData.name,
      id: AdminData._id,
    };

    // Generate the JWT token
    let token;
    try {
      token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in generating the token",
      });
    }

    // Set the token in the response
    AdminData.token = token;
    AdminData.Admin = undefined; // Remove the password from the response

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.cookie("AdminLogin", token, options).status(200).json({
      success: true,
      token,
      AdminData,
      message: "Admin logged in successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Your data is not saved, talk to admin",
      error: error.message,
    });
  }
};