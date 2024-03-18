"use client";
import { CldUploadButton } from "next-cloudinary";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import toast from "react-hot-toast";
import Image from "next/image";

interface FileUploadProps {
  url?: string,
  imageUrl?: string;
  onChange: (src?: string) => void;
  disabled?: boolean;
}

export const FileUpload = ({ imageUrl, onChange, url, disabled }: FileUploadProps) => {
  return (
    <div className="space-y-r w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onSuccess={(result: any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 50,
        }}
        uploadPreset="byjxe5ys"
      >
        <div
          className=" p-4
        border-4
        border-dashed
        border-primary/10
        rounded-lg
        hover:opacity-75
        transition
        flex
        flex-col
        space-y-2
        items-center
        justify-center
        "
        >
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="Upload"
              src={imageUrl || url || "placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
