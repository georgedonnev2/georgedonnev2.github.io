const express = require("express");
const router = express.Router();

// 导入控制器模块
const studentCtrl = require("../ctrls/studentCtrl");


// GET 获取单个学生
router.get("/get", studentCtrl.studentSome);
//router.get("/get", studentDetail);

// GET 获取所有学生
router.get("/getall", studentCtrl.studentAll);

router.get("/create",studentCtrl.studentInput);
router.post("/newone", studentCtrl.studentCreate);

router.get("/createtest",studentCtrl.student_create_get);
router.post("/createtest",studentCtrl.student_create_post);

router.get("/update/:id", studentCtrl.student_update_get);
router.post("/update/:id", studentCtrl.student_update_post);

router.get("/aggregate", studentCtrl.student_aggregate);

//router.get("/updateid", studentCtrl.studentUpdateId);
//router.get("/upget", studentCtrl.studentUpdateGet);


module.exports = router;