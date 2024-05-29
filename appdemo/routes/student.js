const express = require("express");
const router = express.Router();

// 导入控制器模块
const student_controller = require("../controllers/studentController");

// GET 主页面
router.get("/", student_controller.index);

// GET 获取学生信息
router.get("/get", student_controller.student_get);

// 新增学生信息，先 GET 请求后获得填写信息的页面。信息填写好后按提交按钮，发送 POST 请求。
router.get("/create", student_controller.student_create_get);
router.post("/create", student_controller.student_create_post);

// 删除学生信息，先 GET 请求后获得学生信息。按提交按钮，发送 POST 请求删除。
router.get("/delete/:id", student_controller.student_delete_get);
router.post("/delete/:id", student_controller.student_delete_post);

// 更新学生信息，先 GET 请求后获得填写信息的页面。信息填写好后按提交按钮，发送 POST 请求。
router.get("/update/:id", student_controller.student_update_get);
router.post("/update/:id", student_controller.student_update_post);

// 统计成绩
router.get("/aggregate", student_controller.student_aggregate);

module.exports = router;