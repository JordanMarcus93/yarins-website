"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

interface SocialProps {
  showSocial?: boolean;
}
export const Social = ({ showSocial }: SocialProps) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
