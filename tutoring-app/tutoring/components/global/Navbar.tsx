import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { MobileSidebar } from "../global/MobileSidebar";
import { NavbarRoutes } from "./NavbarRoutes";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const Navbar = () => {
  return (
    <div className="fixed w-full h-16 z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            MedPathways
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <NavbarRoutes />
        {/* <Button size="sm" variant="premium">
          Admin
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button> */}
        
      </div>
    </div>
  );
};
