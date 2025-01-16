import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "API is working!",
  });
};

// update user

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// delete user

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

// Start Free Trial
export const startTrial = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(errorHandler(404, "User not found."));
    }

    if (user.isOnTrial) {
      return res.status(400).json({
        success: false,
        message: "Free trial is already activated.",
      });
    }

    user.isOnTrial = true;
    user.trialExpiryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Free trial activated.",
      trialExpiryDate: user.trialExpiryDate,
    });
  } catch (error) {
    next(error);
  }
};

// Get Trial Status
export const getTrialStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(errorHandler(404, "User not found."));
    }

    const isOnTrial =
      user.isOnTrial && new Date(user.trialExpiryDate) > new Date();

    res.status(200).json({
      success: true,
      isOnTrial,
      trialExpiryDate: user.trialExpiryDate,
    });
  } catch (error) {
    next(error);
  }
};
