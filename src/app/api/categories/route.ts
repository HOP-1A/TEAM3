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
export const GET = async (req: Request) => {
  try {
    const categories = await prisma.categories.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("error!", error);
    return NextResponse.json(
      {
        error: "failed to get categories",
      },
      {
        status: 500,
      }
    );
  }
}
export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const category = await prisma.categories.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.error("error!", error);
    return NextResponse.json(
      {
        error: "failed to delete category",
      },
      {
        status: 500,
      }
    );
  }
}
export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const category = await prisma.categories.update({
      where: {
        id: body.id,
      },
      data: {
        categoryName: body.categoryName,
        imageUrl: body.imageUrl,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.error("error!", error);
    return NextResponse.json(
      {
        error: "failed to update category",
      },
      {
        status: 500,
      }
    );
  }
}