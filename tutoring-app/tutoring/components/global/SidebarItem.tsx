"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "text-muted-foreground text-xs group flex p-3 w-full gap-x-2 justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition-all",
        isActive && "bg-primary/10 text-primary"
      )}
    >
      <div className="flex flex-col gap-y-2 items-center flex-1">
        <Icon className="h-5 w-5" />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 h-full rounded-full border-primary  transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
