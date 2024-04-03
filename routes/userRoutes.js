import express from "express";
import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

//Login
router.route("/login").post(login);
// Logout
router.route("/logout").get(logout);
// getMyProfile
router.route("/me").get(isAuthenticated, getMyProfile);
// change password

router.route("/changepassword").put(isAuthenticated, changePassword);
//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);
// Forget Password
// Reset password

// Add to playlist
// Remove from playlist

export default router;
