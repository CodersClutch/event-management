"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { X } from "lucide-react"; // For the remove icon

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFilesChange: (files: File[]) => void; // Pass the selected files to the parent
  value?: string[];
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFilesChange,
  value,
}: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>(value || []);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));

      setSelectedFiles((prev) => [...prev, ...newFiles]);
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
      onFilesChange([...selectedFiles, ...newFiles]); // Pass the updated files to the parent
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    const updatedPreviewUrls = previewUrls.filter((_, i) => i !== index);

    setSelectedFiles(updatedFiles);
    setPreviewUrls(updatedPreviewUrls);
    onFilesChange(updatedFiles); // Pass the updated files to the parent
  };

  return (
    <div>
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className=""
        id="file-upload"
        multiple // Allow multiple file selection
      />

      {/* Display the selected image previews */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {previewUrls?.map((url, index) => (
          <div key={index} className="relative">
            <Image
              src={url}
              alt={`Selected file preview ${index}`}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <button
              type="button"
              className="absolute top-1 right-1 bg-red-500 rounded-full p-1 hover:bg-red-600"
              onClick={() => handleRemoveImage(index)}
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
