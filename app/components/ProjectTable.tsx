// import db from "@/lib/initSupabase";
import Link from "next/link";

export default async function ProjectTable() {
  // const projectData: Promise<Project[]> = db().select();
  // const projects = await projectData;

  return (
    <>
      {/* {projects?.map((project) => ( */}
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600"
          // key={project.id}
        >
          <th
            scope="row"
            className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
          >
            {/* <Link href={`/dashboard/${project.id}`}>{project.name}</Link> */}EFG Landscaping
          </th>
          <td className="px-6 py-4">
            {/* <Link href={`/dashboard/${project.id}`}>{project.address}</Link> */}789 Elm Road
          </td>
          <td className="px-6 py-4">
            {/* <Link href={`/dashboard/${project.id}`}>{project.stage}</Link> */}Permit
          </td>
        </tr>
      {/* ))} */}
    </>
  );
}
