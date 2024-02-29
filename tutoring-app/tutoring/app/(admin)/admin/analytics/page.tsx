import { Navbar } from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnalyticsPage = () => {
  return (
    <div className="p-6">
      <Link href="/admin/create">
        <Button>New Course</Button>
      </Link>
    </div>
  );
};

export default AnalyticsPage;
