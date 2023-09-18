import { Metadata } from "next";
import ProjectTable from "../components/ProjectTable";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <ProjectTable />
    </>
  );
}
