
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

        const studentInf = [
            { "jnuid": 1234, "name": "George", "gender": "男" },
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

        rsp.redirect("/student/get?jnuid=" + req.body.jnuid);
    
    } catch (e) {
        console.error(e);
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
        const studentInf = [
            { "jnuid": 1235, "name": "Alice", "gender": "女" },
        ]

        rsp.render(
            'delete_get',
            {
                title: '学生详情--即将删除',
                student_inf: studentInf,
            }
        );

    } catch (e) {
        console.error(e);
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

        // operation to added to delete student information from database.

        rsp.render(
            'delete_post',
            {
                title: '学生信息已删除',
                stuid: req.params.id,
            }
        );
    } catch (e) {
        console.error(e);
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

        const studentInf = [
            { "jnuid": 1234, "name": "George", "gender": "女", "birthday": "1981-11-12", "cellphone": 13951033222 },
        ]

        rsp.render(
            'update',
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

/// Update a student
/**
 * 1. to respond POST request by URL: localhost:3000/student/update/:id. e.g., update/1234.
 * 2. to return student detail page to browser if operation is done. 
 */
exports.student_update_post = async function (req, rsp, next) {
    try {
        rsp.redirect("/student/get?jnuid=" + req.body.jnuid);
    } catch (e) {
        console.error(e);
        rsp.send(e);
    }
};