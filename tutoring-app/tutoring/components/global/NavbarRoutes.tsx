"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut, Sparkles } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");
  const isStudent = pathname?.includes("chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isAdmin || isStudent ? (
        <Link href="/">
          <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="admin/courses">
          <Button size="sm" variant="premium">
            Admin
            <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        </Link>
      )}
    </div>
  );
};
