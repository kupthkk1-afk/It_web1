import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";

export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find()
      .sort({ name: 1 })
      .lean();

    return NextResponse.json({
      categories,
    });
  } catch (error) {
    console.error("GET categories error:", error);

    return NextResponse.json(
      { message: "𝗖𝗮𝗻'𝘁 𝗟𝗼𝗮𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const slug = String(body.slug ?? "")
      .trim()
      .toLowerCase();
    const description = String(body.description ?? "").trim();

    if (!name || !slug) {
      return NextResponse.json(
        { message: "𝗣𝗹𝗲𝗮𝘀𝗲 𝗘𝗻𝘁𝗲𝗿 𝗡𝗮𝗺𝗲 𝗢𝗿 𝗦𝗹𝘂𝗴" },
        { status: 400 }
      );
    }

    const existingCategory = await Category.findOne({
      $or: [{ name }, { slug }],
    });

    if (existingCategory) {
      return NextResponse.json(
        { message: "𝗡𝗮𝗺𝗲 𝗢𝗿 𝗦𝗹𝘂𝗴 𝗛𝗮𝘀 𝗕𝗲𝗲𝗻 𝗘𝘅𝗶𝘀𝘁𝗶𝗻𝗴" },
        { status: 409 }
      );
    }

    const category = await Category.create({
      name,
      slug,
      description,
    });

    return NextResponse.json(
      {
        message: "𝗔𝗱𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗦𝘂𝗰𝗰𝗲𝘀𝘀",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST category error:", error);

    return NextResponse.json(
      { message: "𝗔𝗱𝗱 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 𝗨𝗻𝘀𝘂𝗰𝗰𝗲𝘀𝘀" },
      { status: 500 }
    );
  }
}