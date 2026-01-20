const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.quote.createMany({
    data: [
      { text: "Eat. Sleep. Code. Repeat.", author: "Dev Life" },
      { text: "It’s not a bug, it’s a feature.", author: "Programmer" },
      { text: "Hello World, Hello Future.", author: "Coder" },
    ],
  })

  console.log("✅ Seed data inserted")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
