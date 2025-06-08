"use client";
import { useUploadVideo } from "@/lib/uploadService";

export default function Home() {

  const { mutate, data, error, isPending } = useUploadVideo();
  const handleVideoUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("video") as File;

    if (!file || file.size === 0) return;

    const uploadFormData = new FormData();
    uploadFormData.append("video", file);

    console.log("file name ===", file, uploadFormData, typeof uploadFormData);
    for (let [key, value] of uploadFormData.entries()) {
      console.log('form entries', key, value);
    }
    mutate({
      data: uploadFormData,
    });
  };
  return (
    <div>
      <main>
        <div>
          <p>something here to prevent hydration error</p>
          <form onSubmit={handleVideoUpload}>
            <input type="file" name="video" />
            <button type="submit" disabled={isPending}>
              <p className="text-white">
                {isPending ? "Uploading..." : "Upload"}
              </p>
            </button>
            {error && <p className="text-amber-500">Error uploading video</p>}
            {data && <p className="text-lime-500">Upload successful!</p>}
          </form>
        </div>
      </main>
    </div>
  );
}
