import { NotesNavbar } from "@/components/notes/NotesNavbar";
import { Sidebar } from "@/components/notes/Sidebar";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NotesNavbar />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};
export default NotesLayout;
