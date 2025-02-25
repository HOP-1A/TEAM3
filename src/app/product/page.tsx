import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const Page = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  return <div></div>;
};
export default Page;
