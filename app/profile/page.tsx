import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Profile() {

  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div >

      <h2> 𝗬𝗼𝘂𝗿 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 </h2>
      <p>Welcome: {user.name as string}</p>
      <p>Role: {user.role as string}</p>
      <p>Email: {user.email as string}</p>

    </div>
  );
}