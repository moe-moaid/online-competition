"use client";
import { useUploadVideo } from "@/lib/uploadService";
import MciInput from "./components/MciInput";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  const [open, setOpen] = useState<boolean>(false);
  const [gener, setGener] = useState<Geners | undefined>();
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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {gener ? gener : "Select category"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {geners.map((gener, i) => (
                    <CommandItem
                      key={`${gener} - ${i}`}
                      value={gener}
                      onSelect={(currentGener) => {
                        setGener(
                          currentGener === geners[i] ? "" : currentGener
                        );
                        setOpen(false);
                      }}
                    >
                      {gener}
                      <Check
                        className={cn(
                          "ms-auto",
                          gener === gener ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
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
