import { Categories } from "@/components/courses/Categories";
import { SearchInput } from "@/components/global/SearchInput";
import { db } from "@/lib/db";

const NotesPage = async () => {

  const categories = await db.category.findMany();

  return (
    <div className="p-4 space-y-2 h-full">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
};
export default NotesPage;
