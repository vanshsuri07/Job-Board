import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};

export const getUserController = async (req, res, next) => {
  try {
    console.log("req.user =>", req.user); // 👀

    const user = await userModel.findById(req.user.userId);
    if (!user) {
      return res.status(404).send({
        message: "User Not Found",
        success: false,
      });
    }

    user.password = undefined;

    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log("GET USER ERROR =>", error);
    res.status(500).send({
      message: "Auth Error",
      success: false,
      error: error.message,
    });
  }
};
