import express from "express";
import {
  addLecture,
  createCourse,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// get All courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admin
router.route("/createcourse").post(singleUpload, createCourse);

// Add Lecture, Delete Course, Get Course details

router
  .route("/course/:id")
  .get(getCourseLectures)
  .post(singleUpload, addLecture);

// Delete Course

export default router;
