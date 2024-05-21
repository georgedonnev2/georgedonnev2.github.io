//const Author = require("../models/author");
//const express = require('express')
const {
    PrismaClient
} = require('@prisma/client')
const prisma = new PrismaClient()

// 显示学生详情

//exports.studentDetail = (req, res) => {
//  res.send("未实现：学生详情");
//};

//// Get a or some student(s)
exports.studentSome = async function (req, rsp, next) {
    try {
        console.log("query:", req.query)

        const studentList = await prisma.students.findMany({
            where: {
                //jnuid: 9999
                jnuid: Number(req.query.jnuid)
            }
            //console.log("student:", oneStudent)
        })

        console.log("student1:", studentList)
        /*
          .then(async () => {
            await prisma.$disconnect()
          })
          .catch(async (e) => {
            console.error(e)
            //await prisma.$disconnect()
            //process.exit(1)
          })
      */


        console.log("params: ", req.params);
        console.log("student:", studentList);
        //rsp.send("未实现：学生详情-1458");
        //res.send("未实现：学生详情-0511");

        rsp.render("student", {
            title: "学生详情",
            student_inf: studentList,
        })


    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
    }
};

//// Get all students by /student/getall
exports.studentAll = async function (req, rsp, next) {
    try {
        console.log("query:", req.query)

        const studentList = await prisma.students.findMany()

        console.log("params: ", req.params);
        console.log("student:", studentList);

        rsp.render("student", {
            title: "学生详情",
            student_inf: studentList,
        })


    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
    }
};

/// 
exports.student_create_get = async function (req, rsp, next) {
    rsp.render("create_form", {
        title: "testing form of creating a student"
    });
};

///
exports.student_create_post = async function (req, rsp, next) {
    try {
        //rsp.render("create_form", { title: "testing form of creating a student--post" });
        console.log("body:", req.body);

        const studentList = await prisma.students.create({
            data: {
                jnuid: Number(req.body.jnuid),
                name: req.body.name,
                gender: '男',
                //birthday: req.body.birthday,
                birthday: '1997-11-11T12:10:10.000Z',
                //Invalid value for argument `birthday`: premature end of input. Expected ISO-8601 DateTime.
                cellphone: '13951234556',
            },
        })


        //rsp.send("create a student, junid:" + req.body.jnuid);
        rsp.redirect('/student/get?jnuid=' + req.body.jnuid);

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// 
exports.student_update_get = async function (req, rsp, next) {
    try {

        console.log("params:", req.params);
        console.log("query: ", req.query);
        console.log("id: ", req.params.id);

        const studentList = await prisma.students.findMany({
            where: {
                //jnuid: 9999
                jnuid: Number(req.params.id)
            }
        })

        if (studentList.length == 0) {
            await prisma.$disconnect();
            rsp.send('Not found jnuid: ' + req.query.jnuid);
        }

        console.log('length:', studentList.length);
        console.log('typeof student:', typeof (studentList));
        console.log('student[0]:', studentList[0]);
        console.log('student[0].jnuid', studentList[0].jnuid);
        console.log('student:', studentList);

        rsp.render("create_form", {
            title: "Update Student",
            student_list: studentList[0],
        });

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};


exports.student_update_post = async function (req, rsp, next) {
    rsp.render("create_form", {
        title: "testing form of creating a student"
    });
};


////
exports.student_aggregate = async function (req, rsp, next) {
    try {

        //const jnuId = 1101;
        //const scoreSummary = await prisma.$queryRaw`select * from score where jnuid= ${jnuId}`;
        //const scoreSummary = await prisma.$queryRaw`select course, (case when score>=90 then "[90-100]" when score>=80 then "[80-90)" when score>=70 then "[70-80)" when score>=60 then "[60-70)" else "[0-60)" end) grade, count(*) records from score  group by course, grade order by course, grade`;

        const courseSummary = '编译原理';

        //const scoreSummary = await prisma.$queryRaw`select (case when score>=90 then "[90及以上]" when score>=80 then "[80-90)" when score>=70 then "[70-80)" when score>=60 then "[60-70)" else "[0-60)" end) grade, count(*) records from score  where course=${courseSummary} group by grade order by grade`;

        const scoreSummary = await prisma.$queryRaw`select sum(case when score between 0 and 59 then 1 else 0 end) as "[0-59]",sum(case when score between 60 and 69 then 1 else 0 end) as "[60-69]",sum(case when score between 70 and 79 then 1 else 0 end) as "[70-79]",sum(case when score between 80 and 89 then 1 else 0 end) as "[80-89]",sum(case when score>=90 then 1 else 0 end) as "90及以上" from score where course=${courseSummary}`;




        console.log("score_summary: ", scoreSummary);

        BigInt.prototype.toJSON = function () {
            const int = Number.parseInt(this.toString());
            return int ?? this.toString();
        };

        console.log("score-summary: ", scoreSummary);
        console.log("lables: ", scoreSummary.map(row => row.grade));

        rsp.render("aggregate_form", {
            title: "统计--" + courseSummary,
            //score_summary_labels: scoreSummary,
            //score_summary_labels: JSON.stringify(scoreSummary.map(row => row.grade)),
            //score_summary_labels: scoreSummary.map(row => row.grade),
            score_summary_labels: Object.keys(scoreSummary[0]),
            score_summary_data: Object.values(scoreSummary[0]),

            //score_summary_data: scoreSummary.map(row => row.records),
            course_summary: courseSummary,
        });

        //rsp.send(scoreSummary);

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

//// 
exports.studentInput = async function (req, rsp, next) {
    rsp.sendFile('/create.html', {
        root: '.'
    })

};

////
//// 
exports.studentCreate = async function (req, rsp, next) {
    try {
        const {
            jnuid,
            name,
            gender,
            birthday,
            cellphone
        } = req.body

        console.log("body:", req.body);

        const studentList = await prisma.students.create({
            data: {
                jnuid: Number(req.body.jnuid),
                name: req.body.name,
                gender: req.body.gender,
                //birthday: req.body.birthday,
                birthday: '1997-11-11T12:10:10.000Z',
                //Invalid value for argument `birthday`: premature end of input. Expected ISO-8601 DateTime.
                cellphone: req.body.cellphone,

            },
        })
        //const studentList = await prisma.students.findMany()

        rsp.send("create a student, junid:" + req.body.jnuid);
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.studentUpdateId = async function (req, rsp, next) {
    rsp.sendFile('/updateid.html', {
        root: '.'
    })

};

///
exports.studentUpdateGet = async function (req, rsp, next) {
    try {
        const studentList = await prisma.students.findMany({
            where: {
                //jnuid: 9999
                jnuid: Number(req.query.jnuid)
            }
            //console.log("student:", oneStudent)
        })

        console.log("student:", studentList);

        rsp.render("updateid", {
            title: "学生详情",
            student_list: studentList,
        });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

//module.exports = studentDetail;
//module.exports = router;

//studentDetail.then(async () => {
//  await prisma.$disconnect()
//})


/** 
exports.studentDetial = function (req, rsp, next)  {
  //const oneStudent = await prisma.students.findMany({
  //await is only valid in async functions and the top level bodies of modules
  const oneStudent = prisma.students.findMany({
    where: {
      jnuid: 1201
    }
  })
  console.log(oneStudent)


  oneStudent.then(async () => {
    await prisma.$disconnect()
  })

  OneStudent.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1)
  })
 
}
*/