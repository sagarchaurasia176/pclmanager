const GuideSchema = require("../model/GuideSchema");
// admin page apply here so we get
exports.Guide = async (req, res) => {
  try {
    const { GuideID, name } = req.body;
    // check AdminId exist or not
    const Guidedb = await GuideSchema.create({ GuideID, name });

    const GuideIDChecker = await GuideSchema.findOne({ GuideID });
    
    
    if (GuideIDChecker) {
      return res.status(400).json({
        success: false,
        message: "your Id Not be matched !",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Data saved Succesfully",
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Data not saved Succesfully",
    });
  }
};
