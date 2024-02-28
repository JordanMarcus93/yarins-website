"use client";
import { BarChart, List, LucideIcon, Sidebar } from "lucide-react"; // Add this import statement
import { Home, Pencil, School, Settings } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
    pro: false,
  },
  {
    icon: Pencil,
    href: "/notes",
    label: "Notes",
    pro: false,
  },
  {
    icon: School,
    href: "/tutoring",
    label: "Tutoring",
    pro: false,
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
    pro: false,
  },
];

const adminRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/admin/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/admin/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdmin = pathname?.includes("/admin");
  const routes = isAdmin ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col h-full w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
