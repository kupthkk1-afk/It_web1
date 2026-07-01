import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Profile() {

  const user = await getSession();

  return (
    <div >

      <h2> Dashbosrd </h2>
      <p>Welcome: {user.name as string}</p>
      <p>Role: {user.role as string}</p>
      <p>CC: {user.cc as string}</p>
    </div>
  );
}