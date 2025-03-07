import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient({log:['info','query'],})

async function main() {
  // ... you will write your Prisma Client queries here
   await prisma.user.create({
    data:{
        email:"gauravdotiyal3@gmail.com",
        name:"Gaurav",
    }
   })
}

// invoke the main function
main()
  .then(async () => {
    console.log("Done with the query") 
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })