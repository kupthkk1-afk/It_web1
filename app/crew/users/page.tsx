import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function CrewUser() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "crew") {
    redirect("/dashboard");
  }

  return (
    <div >
      <h2> Crew </h2>
      <p> แสดงเฉพาะหน้า Crew เท่านั้น  </p>
 
    </div>
  );
}