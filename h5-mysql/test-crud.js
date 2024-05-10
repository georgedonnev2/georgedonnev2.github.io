const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost", // MySQL 地址
  port: 3306, // MySQL 端口
  user: "root", // MySQL 用户名
  password: "Lily093897", // MySQL 密码
  database: "gdtest" // 数据库名称
})

// 连接到 MySQL
connection.connect((err) => {
  if (err) {
    console.error("连接失败:", err)
    return
  }

  console.log("成功连接到 MySQL")

  // 查询用户表格中的所有数据
  connection.query("select * from students", (err, results) => {
    if (err) {
      console.error("查询失败:", err)
      return
    }

    console.log("学生列表：")
    results.forEach((row) => {
      console.log(`jnuid: ${row.jnuid}\n ${row.name}, ${row.gender}, ${row.birthday}, ${row.cellphone}, ${row.address}`)
    })

    // 插入一条用户记录
    //insert into students (jnuid, name, gender, birthday) values (1002, '郭靖', '男','1980-2-2');
    const newUser = { jnuid: "1201", name: "George Donne", gender: "男", birthday: "1971-1-1" }
    connection.query("insert into students set ?", newUser, (err, results) => {
      if (err) {
        console.error("插入失败:", err)
        return
      }

      console.log("数据插入成功！")

      // 关闭数据库连接
      connection.end()
    })
  })
})