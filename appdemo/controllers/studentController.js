
// import prisma client
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/// Home Page
/**
 * 1. to respond GET request by URL: localhost:3000 or localhost:3000/index.html or localhost:3000/student. localhost:3000 is an example of ip:port.
 * 2. to return HOME page (rendered with home.pug) to browser. 
 */
exports.index = async function (req, rsp, next) {
    try {
        rsp.render(
            'home',
            {
                title: '学生宝--学生信息管理信息',
            }
        );
    } catch (e) {
        console.error(e);
        rsp.send(e);
    }
};

/// Get student information
/**
 * 1. to respond GET request by URL: localhost:3000/student/get.
 * 2. to return student detail page (rendered with student_detail.pug) to browser. 
 */
exports.student_get = async function (req, rsp, next) {
    try {

        // students of prisma.students.findMany is the table name in db.
        const studentInf = await prisma.students.findMany({
            where: {
                //key of req.querey.key is the value of key in url localhost:3000/student/get?key=1101, i.e., 1101
                jnuid: Number(req.query.key)
            }
        })

        console.log("studentInf: ", studentInf)

        rsp.render(
            'student_detail',
            {
                title: '学生详情',
                student_inf: studentInf,
            }
        );
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Create new student
/**
 * 1. to respond GET request by URL: localhost:3000/student/create.
 * 2. to return input page (rendered with create.pug) to browser. 
 */
exports.student_create_get = async function (req, rsp, next) {
    try {
        rsp.render(
            'create',
            {
                title: '新增学生',
            }
        );

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Create new student
/**
 * 1. to respond POST request by URL: localhost:3000/student/create.
 * 2. to return student detail page to browser if operation is done. 
 */
exports.student_create_post = async function (req, rsp, next) {
    try {
        // insert student information into database.
        const studentInf = await prisma.students.create({
            data: {
                jnuid: Number(req.body.jnuid),
                name: req.body.name,
                gender: req.body.gender,
                //birthday: req.body.birthday,
                //Invalid value for argument `birthday`: premature end of input. Expected ISO-8601 DateTime.
                birthday: '1997-11-11T12:10:10.000Z',
                cellphone: req.body.cellphone,
            },
        })
        rsp.redirect("/student/get?key=" + req.body.jnuid);

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Delete a student
/**
 * 1. to respond GET request by URL: localhost:3000/student/delete/:id. e.g., delete/1234.
 * 2. to return confirm page (rendered with delete_get.pug) to browser. 
 */
exports.student_delete_get = async function (req, rsp, next) {
    try {
        const studentInf = await prisma.students.findMany({
            where: {
                jnuid: Number(req.params.id)
            }
        })

        rsp.render(
            'delete_get',
            {
                title: '学生详情--即将删除',
                student_inf: studentInf,
            }
        );

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Delete a student
/**
 * 1. to respond POST request by URL: localhost:3000/student/delete/:id. e.g., delete/1234.
 * 2. to return notification page (rendered with delete_post.pug) to browser. 
 */
exports.student_delete_post = async function (req, rsp, next) {
    try {

        const studentInf = await prisma.students.delete({
            where: {
                jnuid: Number(req.params.id)
            }
        })

        // console.log("studentInf: ", studentInf);

        rsp.render(
            'delete_post',
            {
                title: '学生信息已删除',
                stuid: req.params.id,
            }
        );
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Update a student
/**
 * 1. to respond GET request by URL: localhost:3000/student/update/:id. e.g., update/1234.
 * 2. to return update information page (rendered with update.pug) to browser. 
 */
exports.student_update_get = async function (req, rsp, next) {
    try {

        const studentInf = await prisma.students.findMany({
            where: {
                jnuid: Number(req.params.id)
            }
        })

        rsp.render(
            'update',
            {
                title: '更新学生',
                student_inf: studentInf,
            }
        );

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

/// Update a student
/**
 * 1. to respond POST request by URL: localhost:3000/student/update/:id. e.g., update/1234.
 * 2. to return student detail page to browser if operation is done. 
 */
exports.student_update_post = async function (req, rsp, next) {
    try {
        const studentInf = await prisma.students.update({
            where: {
                jnuid: Number(req.body.jnuid),
            },
            data: {
                jnuid: Number(req.body.jnuid),
                name: req.body.name,
                gender: req.body.gender,
                //birthday: req.body.birthday,
                //Invalid value for argument `birthday`: premature end of input. Expected ISO-8601 DateTime.
                birthday: '1997-11-11T12:10:10.000Z',
                cellphone: req.body.cellphone,
            },
        })

        console.log("studentInf: ", studentInf);

        rsp.redirect("/student/get?key=" + req.body.jnuid);
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.student_aggregate = async function (req, rsp, next) {
    try {
        const courseSummary = '编译原理';

        const scoreSummary = await prisma.$queryRaw`select sum(case when score between 0 and 59 then 1 else 0 end) as "[0-59]",sum(case when score between 60 and 69 then 1 else 0 end) as "[60-69]",sum(case when score between 70 and 79 then 1 else 0 end) as "[70-79]",sum(case when score between 80 and 89 then 1 else 0 end) as "[80-89]",sum(case when score>=90 then 1 else 0 end) as "90及以上" from score where course=${courseSummary}`;

        rsp.render(
            "aggregate",
            {
                title: "统计--" + courseSummary,
                score_summary_labels: Object.keys(scoreSummary[0]),
                score_summary_data: Object.values(scoreSummary[0]),
                course_summary: courseSummary,
            });

    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        rsp.send(e);
    }
};