import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: "𝗘𝗺𝗮𝗶𝗹 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗲𝘅𝗶𝘀𝘁𝘀" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return NextResponse.json({ message: "𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝘀" });
  } catch {
    return NextResponse.json(
      { message: "𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿 𝗳𝗮𝗶𝗹𝗲𝗱" },
      { status: 500 }
    );
  }
}