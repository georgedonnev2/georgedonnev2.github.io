
/// Home Page
/**
 * 1、url: ip+port, or ip+port/student. e.g., http://localhost:3000, or http://localhost:3000/student
 * 2. return home page which like baidu or google, i.e. a search box at the center of the page, and some nav items on the top right.
 */
exports.index = async function (req, rsp, next) {
    try {
        // console.log('home page...');
        rsp.render(
            'home_form',
            {
                title: '学生宝--学生信息管理信息',
            }
        );
    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

/// 
exports.student_get = async function (req, rsp, next) {
    try {

        const studentInf = [
            { "jnuid": 1234, "name": "George", "gender": "男" },
            { "jnuid": 1235, "name": "Alice", "gender": "女" },

        ]
        rsp.render(
            'student_detail',
            {
                title: '学生详情',
                student_inf: studentInf,
            }
        );
    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

/// 
exports.student_create_get = async function (req, rsp, next) {
    try {
        rsp.render(
            'student_upsert',
            {
                title: '新增学生',
            }
        );

    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.student_create_post = async function (req, rsp, next) {
    try {
        // console.log("req.body: ", req.body);
        rsp.redirect("/student/get?jnuid=" + req.body.jnuid);

    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.student_delete_get = async function (req, rsp, next) {
    try {
        //rsp.send("tbd--delete student--get.");
        const studentInf = [
            { "jnuid": 1235, "name": "Alice", "gender": "女" },

        ]

        rsp.render(
            'delete_get_form',
            {
                title: '学生详情--即将删除',
                student_inf: studentInf,
            }
        );

    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.student_delete_post = async function (req, rsp, next) {
    try {
        rsp.render(
            'delete_post_form',
            {
                title: '学生信息已删除',
                stuid: req.params.id,
            }
        );
    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

/// 
exports.student_update_get = async function (req, rsp, next) {
    try {
        const studentInf = [
            { "jnuid": 1234, "name": "George", "gender": "女", "birthday": "1981-11-12", "cellphone": 13951033222 },

        ]

        rsp.render(
            'student_upsert',
            {
                title: '更新学生',
                student_inf: studentInf,
            }
        );

    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};

///
exports.student_update_post = async function (req, rsp, next) {
    try {
        // console.log("req.body: ", req.body);
        rsp.redirect("/student/get?jnuid=" + req.body.jnuid);
    } catch (e) {
        console.error(e);
        // await prisma.$disconnect();
        rsp.send(e);
    }
};