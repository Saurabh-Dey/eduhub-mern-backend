import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
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
router.route("/forgetpassword").post(forgetPassword);
// Reset password
router.route("/resetpassword/:token").put(resetPassword);
// Add to playlist

router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
// Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);
export default router;
