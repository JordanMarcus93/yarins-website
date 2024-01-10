import { HomeNavbar } from "@/components/home/HomeNavbar";


const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <HomeNavbar />
      <main className="pt-40 bg-red-50 pb-40">{children}</main>
    </div>
  );
};

export default HomePageLayout;
