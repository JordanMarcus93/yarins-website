"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FileUp,
  ImageIcon,
  Loader2,
  Pencil,
  PlusCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Attachment, Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "./file-upload";

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
});

export const AttachmentForm = ({
  initialData,
  courseId,
}: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const router = useRouter();
  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url:
        initialData?.attachments
          .map((attachment) => attachment.url)
          .join(",") || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success("Attachment deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-primary/20 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Attachments
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a File
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments?.length === 0 && (
            <p className="text-sm mt-2 text-primary/30 italic">
              No Attachments Yet
            </p>
          )}
          {initialData.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-3 bg-sky-500 border-primary/30 text-primary rounded-md border"
                >
                  <FileUp className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-xs line-clamp-1">{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <Button
                      variant="ghost"
                      onClick={() => onDelete(attachment.id)}
                      className="ml-auto hover:opacity-75 transition"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {/*  This block of code rendered a view of the first attachment in the array
      of attachments */}
      {/* {!isEditing &&
        (!initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-primary/30 rounded-md">
            <ImageIcon className="h-10 w-10" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              src={initialData?.attachments[0]?.url || "/placeholder.svg"}
              alt="Upload"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))} */}
      {isEditing && (
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 pb-10"
            >
              <FormField
                name="url"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                    <FormControl>
                      <FileUpload
                        disabled={isSubmitting}
                        onChange={field.onChange}
                        url={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Button type="submit" disabled={false}>
                  Save
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your students might need to succeed in your course.
            This could be a syllabus, a worksheet, or a reading list.
          </div>
        </div>
      )}
    </div>
  );
};
