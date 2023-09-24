import DashNavbar from "../components/server/DashNavbar";


export default function DashLayout({ children }: { children: React.ReactNode;}) {

  return (
    <section>
      <DashNavbar />
      {children}
    </section>
  );
}
