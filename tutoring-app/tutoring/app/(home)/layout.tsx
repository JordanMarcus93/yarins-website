import { HomeNavbar } from "@/components/home/HomeNavbar";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <HomeNavbar />
      {children}
    </div>
  );
};

export default HomePageLayout;
