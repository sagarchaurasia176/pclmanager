const GuideSchema = require("../model/GuideSchema");
const bcrypt = require("bcrypt");

// admin page apply here so we get
exports.Guide = async (req, res) => {
  try {
    // destructure the guide schema
    const { Guides, name } = req.body;

    // find by the Guides here => it's to check that the Guides is exist or not
    const existingGuideId = await GuideSchema.findOne({ Guides });
    if (existingGuideId) {
      return res.status(400).json({
        Success: false,
        message: "Your Id already exists!",
      });
    }

    // password bcrypt here
    let GuidePasswordBcrypt;
    try {
      GuidePasswordBcrypt = await bcrypt.hash(Guides, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid Guide Id",
        error: error.message,
      });
    }

    // creating new guide data
    const GuideData = await GuideSchema.create({
      Guides: GuidePasswordBcrypt,
      name,
    });

    return res.status(200).json({
      Success: true,
      message: "Your Data has been saved successfully",
      data: GuideData,
    });
  } catch (error) {
    // error message
    return res.status(400).json({
      success: false,
      message: "Data not saved successfully",
      error: error.message,
    });
  }
};
