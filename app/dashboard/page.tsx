import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Dashboard() {

  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div >

      <h2> Dashbosrd </h2>
      <p>Welcome: {user.name as string}</p>
      <p>Role: {user.role as string}</p>
      <p>position: {user.cc as string}</p>

    </div>
  );
}