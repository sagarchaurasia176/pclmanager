const PCLFormSchema = require("../model/PCLFormSchema");
// login auth apply
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// login controller apply here
exports.LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // fetch the data from the useres
    //validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "PLease fill all the details carefully",
      });
    }

    let emailExisting = await PCLFormSchema.findOne({ email: email });
    //if not a registered user
    if (!emailExisting) {
      return res.status(401).json({
        success: false,
        message: "your email is not registered",
      });
    }

    // jwt with cokkies
    const payload = {
      id: emailExisting._id,
      email: emailExisting.email,
    };
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    // here jwt create
    if (await bcrypt.compare(password, emailExisting.password)) {
      let jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      emailExisting = emailExisting.toObject();
      // password set to be hide from the users
      emailExisting.jwtToken = emailExisting;
      emailExisting.password = undefined;

      // set the cookies here
      res.cookie("login", jwtToken, options).status(200).json({
        success: true,
        jwtToken,
        emailExisting,
        message: "User Logged in successfully",
      });
    } else {
      //passwsord do not match
      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }

    const loginData = PCLFormSchema.create({email , password});
  
    res.status(200).json({
      success: true,
      data:loginData,
      message: "Login succesful !",
    });


  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Internal server error !",
      Error: er.message,
    });
  }
};


// get login daat here