import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password, lastName } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password, lastName });
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Username or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Username or password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};
