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

  await prisma.slide.deleteMany();
  await prisma.slide.createMany({
    data: [
      {
        title: "Pritha Health Care is committed to help and rehabilitate the Specially Abled Children.",
        image: "/admin/slider/Kalyanam_Karoti_Special_School.webp",
        link: "/sambal-special-school",
        position: 1,
      },
      {
        title: "Pritha Health Care is committed to help and rehabilitate the differently-abled",
        image: "/admin/slider/Disability Care.webp",
        link: "/disability-care",
        position: 3,
      },
      {
        title: "Pritha Health Care Committed to Eradicate the Avoidable Blindness",
        image: "/admin/slider/Eye Care.webp",
        link: "/eyecare",
        position: 4,
      },
    ],
  });

  await prisma.post.deleteMany();
  await prisma.post.createMany({
    data: [
      {
        title: "22nd Free Eye Camp Successfully Concludes by Pritha Health Care, Moradabad, Courtesy of Shri Krishnalal Sharma Charitable Trust, Moradabad",
        excerpt: "Pritha Health Care Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.",
        content:
          "Pritha Health Care Moradabad organised the ending ceremony of the 22nd Free Eye Camp on Punytithi of the late Shri Mayank Sharma.\n\nHundreds of patients were examined and operated upon free of cost.",
        image: "/admin/blog/31-10-2023/Kachaura Camp.jpg",
        postedAt: new Date("2023-10-31"),
      },
      {
        title: "Embassy of Japan in India provided Eye Medical Equipment",
        excerpt: "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment",
        content:
          "Modern eye machines and equipment have been provided by the Embassy of Japan under the Project for the Provision of Eye Medical Equipment to Pritha Health Care Moradabad.",
        image: "/admin/blog/23-08-2022/Kalyanam_Karoti_The_handover_ceremony.webp",
        postedAt: new Date("2022-08-23"),
      },
    ],
  });

  if ((await prisma.notification.count()) === 0) {
    await prisma.notification.create({ data: { title: "Welcome: add public notices from the admin panel", link: "" } });
  }
  console.log("Seed complete");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
