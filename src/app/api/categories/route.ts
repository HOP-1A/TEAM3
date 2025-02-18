import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const category = await prisma.categories.create({
      data: {
        categoryName: body.categoryName,
        imageUrl: body.imageUrl,
      },
    });
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    console.error("error!", error);
    return NextResponse.json(
      {
        error: "failed to create category",
      },
      {
        status: 500,
      }
    );
  }
};
