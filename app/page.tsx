"use client";
import { useUploadVideo } from "@/lib/uploadService";
import MciInput from "./components/MciInput";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

type Geners =
  | "Hip Pop"
  | "Rap"
  | "RNB"
  | "Afrobeat"
  | "Raggae"
  | "Dancehall"
  | "Reggarton"
  | "Others";
const geners: Geners[] = [
  "Hip Pop",
  "Rap",
  "RNB",
  "Afrobeat",
  "Raggae",
  "Dancehall",
  "Reggarton",
  "Others",
];

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <VideoUploadingForm />
        </div>
      </main>
    </div>
  );
}

function VideoUploadingForm() {
  const [currentGener, setCurrentGener] = useState<Geners | undefined>();
  const { mutate, data, error, isPending } = useUploadVideo();
  const handleVideoUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("video") as File;

    if (!file || file.size === 0) return;

    const uploadFormData = new FormData();
    uploadFormData.append("video", file);
    uploadFormData.append("title", "My Cool Video");
    uploadFormData.append("description", "Optional description");
    uploadFormData.append("artistId", "3");

    for (let [key, value] of uploadFormData.entries()) {
      console.log("form entries", key, value);
    }
    mutate({
      data: uploadFormData,
    });
  };
  console.log('gener ===', currentGener);
  
  return (
    <form
      className="flex flex-row justify-center items-center px-14 gap-x-4"
      onSubmit={handleVideoUpload}
    >
      <div className="flex flex-col gap-y-4">
        <MciInput
          name="title"
          label="Song Name"
          placeholder="Enter sont name"
          required
          fullWidth
        />
        <textarea
          className="outline-none resize-none bg-transparent border rounded-lg border-white hover:border-legendary-500 focus:border-legendary-500 text-white p-4"
          cols={5}
          rows={7}
          placeholder="Song Desctiption"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex flex-row justify-between items-center hover:bg-white"
            >
              {currentGener ? currentGener : "Select a Gener "}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            className="bg-white min-w-full w-[--radix-dropdown-menu-trigger-width]"
          >
            {geners.map((gener, i) => (
              <DropdownMenuItem
                key={`${gener} - ${i}`}
                onSelect={() => {
                  console.log('i am selected!!');
                  setCurrentGener(gener === currentGener ? undefined : gener);
                }}
              >
                {gener}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col justify-between self-stretch">
        <input type="file" name="video" className="text-white" />

        <button type="submit" disabled={isPending}>
          <p className="text-white">{isPending ? "Uploading..." : "Upload"}</p>
        </button>
      </div>

      {error && <p className="text-amber-500">Error uploading video</p>}
      {data && <p className="text-lime-500">Upload successful!</p>}
    </form>
  );
}
