import { NextFunction, Request, Response } from "express";
import User from "../models/user.modal";
import { sendToken } from "../utils/sendToken";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  try {
    const userExist = await User.findOne({
      email: body.email,
    });

    if (userExist)
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    });

    await user.save();

    sendToken(user, res);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password +salt");

    if (!user)
      return res.status(500).json({
        success: false,
        message: "Invalid Credentials",
      });

    const checkPassword = await user.checkPassword(password);
    if (!checkPassword)
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });

    sendToken(user, res);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.clearCookie("auth_token").status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
