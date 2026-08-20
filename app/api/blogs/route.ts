import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();

    const blog = await Blog.find()
      .sort({ title: 1 })
      .lean();

    return NextResponse.json({
      blog,
    });
  } catch (error) {
    console.error("GET blog error:", error); // แก้ข้อความ log ให้ตรงกัน

    return NextResponse.json(
      { message: "Data Can't loaded" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    // เปลี่ยนชื่อตัวแปรให้ตรงกับการใช้งานด้านล่าง หรือใช้ title / content ไปเลย
    const title = String(body.title ?? "").trim();
    const slug = String(body.slug ?? "")
      .trim()
      .toLowerCase();
    const content = String(body.content ?? "").trim(); // เปลี่ยนจาก description เป็น content

    if (!title || !slug) {
      return NextResponse.json(
        { message: "Please Enter Name And Slug" },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findOne({
      $or: [{ title }, { slug }],
    });

    if (existingBlog                        ) {
      return NextResponse.json(
        { message: "Name or Slug is already exitsing" },
        { status: 409 }  
      );
    }

    const blog = await Blog.create({
      title,
      slug,
      content,
    });

    return NextResponse.json(
      { 
        message: "เพิ่มข้อมูลสำเร็จ",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);

    return NextResponse.json(
      { message: "Data Can't Added" },
      { status: 500 }
    );
  }
}