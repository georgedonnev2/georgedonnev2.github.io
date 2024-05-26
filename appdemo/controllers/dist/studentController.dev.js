"use strict";

/// Home Page

/**
 * 1、url: ip+port, or ip+port/student. e.g., http://localhost:3000, or http://localhost:3000/student
 * 2. return home page which like baidu or google, i.e. a search box at the center of the page, and some nav items on the top right.
 */
exports.index = function _callee(req, rsp, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            console.log('home page...'); // rsp.send("tbd--home page.");

            rsp.render('home_form', {
              title: '学生宝--学生信息管理信息'
            });
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; /// 


exports.student_get = function _callee2(req, rsp, next) {
  var studentInf;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            studentInf = [{
              "jnuid": 1234,
              "name": "George",
              "gender": "男"
            }, {
              "jnuid": 1235,
              "name": "Alice",
              "gender": "女"
            }]; //rsp.send("tbd--get student information--get.");

            rsp.render('student_detail', {
              title: '学生详情',
              student_inf: studentInf
            });
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}; /// 


exports.student_create_get = function _callee3(req, rsp, next) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            rsp.send("tbd--create student--get.");
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}; ///


exports.student_create_post = function _callee4(req, rsp, next) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            rsp.send("tbd--create student--post.");
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}; ///


exports.student_delete_post = function _callee5(req, rsp, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          try {
            rsp.send("tbd--delete student--post.");
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}; /// 


exports.student_update_get = function _callee6(req, rsp, next) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          try {
            rsp.send("tbd--update student--get.");
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}; ///


exports.student_update_post = function _callee7(req, rsp, next) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          try {
            rsp.send("tbd--update student--post.");
          } catch (e) {
            console.error(e); // await prisma.$disconnect();

            rsp.send(e);
          }

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
};