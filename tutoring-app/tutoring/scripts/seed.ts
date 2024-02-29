const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Biology" },
        { name: "Biochemistry" },
        { name: "General Chemistry" },
        { name: "Organic Chemistry" },
        { name: "Math" },
        { name: "Physics" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
