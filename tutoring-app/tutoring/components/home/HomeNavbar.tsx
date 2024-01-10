import Link from "next/link";
import { Button } from "../ui/button";

export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="">Logo Here</div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/notes">Notes</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/tutoring">Book an appointment</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Sign-in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Started For Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
