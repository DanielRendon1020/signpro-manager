import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DashNavbar from "../components/server/DashNavbar";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";


export default async function DashLayout({ children }: { children: React.ReactNode;}) {

  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/sign-in");
  } 
    
  return (
    <section>
      <DashNavbar />
      {children}
    </section>
  );
  

}
