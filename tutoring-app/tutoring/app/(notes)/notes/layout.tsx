import { NotesNavbar } from "@/components/notes/NotesNavbar";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NotesNavbar />
      <main className="pt-40 bg-red-50 pb-40">{children}</main>
    </div>
  );
};
export default NotesLayout;
