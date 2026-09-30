const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.stat.deleteMany();
  await prisma.stat.createMany({
    data: [
      { label: "Cataract Operations", value: 172755, position: 1 },
      { label: "Assistive Devices and Mobility Aids", value: 89906, position: 2 },
    ],
  });

  if ((await prisma.slide.count()) === 0) {
    await prisma.slide.createMany({
      data: [
        { title: "Kalyanam Karoti Eye Institute, Mathura", link: "/kalyanam-karoti-eye-institute", position: 1 },
        { title: "Committed to help and rehabilitate specially-abled children", link: "/sambal-special-school", position: 2 },
        { title: "Committed to help and rehabilitate the differently-abled", link: "/disability-care", position: 3 },
        { title: "Committed to eradicate avoidable blindness", link: "/eyecare", position: 4 },
      ],
    });
  }

  if ((await prisma.post.count()) === 0) {
    await prisma.post.createMany({
      data: [
        {
          title: "22nd Free Eye Camp concludes in Kachaura",
          excerpt: "The ending ceremony of the 22nd Free Eye Camp was organised in memory of the late Shri Mayank Sharma.",
          content:
            "Kalyanam Karoti, Mathura organised the ending ceremony of the 22nd Free Eye Camp on the punyatithi of the late Shri Mayank Sharma.\n\nHundreds of patients were screened, and those needing surgery were brought to the base hospital.\n\nEdit or delete this sample post from the admin panel.",
          postedAt: new Date("2023-10-31"),
        },
        {
          title: "Eye medical equipment handed over",
          excerpt: "Modern eye machines and equipment were provided under a grant project.",
          content: "Sample post. Replace it with your own news from /admin/posts.",
          postedAt: new Date("2022-08-23"),
        },
      ],
    });
  }

  if ((await prisma.notification.count()) === 0) {
    await prisma.notification.create({ data: { title: "Welcome: add public notices from the admin panel", link: "" } });
  }
  console.log("Seed complete");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
