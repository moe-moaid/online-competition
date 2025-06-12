"use client";
import { useUploadVideo } from "@/lib/uploadService";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <p>something here to prevent hydration error</p>
          <VideoUploadingForm />
        </div>
      </main>
    </div>
  );
}

function VideoUploadingForm() {
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
    <form onSubmit={handleVideoUpload}>
      <input type="file" name="video" />
      <button type="submit" disabled={isPending}>
        <p className="text-white">{isPending ? "Uploading..." : "Upload"}</p>
      </button>

      <input type="text" name="discription" />
      <textarea cols={5} rows={7} />
      <input type="text" name="title" />
      <input type="text" name="gener" />
      {error && <p className="text-amber-500">Error uploading video</p>}
      {data && <p className="text-lime-500">Upload successful!</p>}
    </form>
  );
}
