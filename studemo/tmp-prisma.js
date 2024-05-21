const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()




async function bb() {
    //students is the name of the table
    
    //const allUsers = await prisma.students.findMany()
    //console.log(allUsers)

    const oneStudent = await prisma.students.findMany({
        where: {
            jnuid: 1201
        }
    })
    console.log(oneStudent)
}

bb()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

//module.exports = Student;