import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Database } from "@/lib/database.types";


export default async function ProjectTable() {

  const supabase = createServerComponentClient<Database>({ cookies });


  const { data: projects } = await supabase
    .from("projects")
    .select();
 

  return (
    <>
      {projects?.map(project => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600"
          key={project.id}
        >
          <th
            scope="row"
            className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
          >
            {/* <Link href={`/dashboard/${project.id}`}>{project.name}</Link> */}{project.name}
          </th>
          <td className="px-6 py-4">
            {/* <Link href={`/dashboard/${project.id}`}>{project.address}</Link> */}{project.address}
          </td>
          <td className="px-6 py-4">
            {/* <Link href={`/dashboard/${project.id}`}>{project.stage}</Link> */}{project.stage}
          </td>
        </tr>
      ))}
    </>
  );
}
