"use client";
import { LucideIcon, Sidebar } from "lucide-react"; // Add this import statement
import { Home, Pencil, School, Settings } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

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
    href: "/appoinment",
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

export const SidebarRoutes = () => {
  const routes = guestRoutes;

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
