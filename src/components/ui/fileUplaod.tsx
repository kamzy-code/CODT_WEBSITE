"use client";
import { X } from "lucide-react";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { storage } from "@/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export type UploadResult = { path: string; url: string };
export type FileUploadHandle = {
  startUpload: (folder?: string) => Promise<UploadResult[]>;
  getFiles: () => File[];
};

export const FileUpload = forwardRef<
  FileUploadHandle,
  {
    fileError?: string;
    maxFiles?: number;
    maxSizeBytes?: number;
    onProgress?: (fileIndex: number, percent: number) => void;
  }
>(
  (
    { fileError, maxFiles = 5, maxSizeBytes = 10 * 1024 * 1024, onProgress },
    reff
  ) => {
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    // const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const picked = e.target.files ? Array.from(e.target.files) : [];
      if (picked.length === 0) return;

      // merge and dedupe by name + size (simple heuristic)
      const combined = [
        ...files,
        ...picked.filter(
          (p) => !files.some((f) => f.name === p.name && f.size === p.size)
        ),
      ];

      syncFilesToInput(combined);
      setFiles(combined);
    };

    // Remove file at index
    const removeFile = (index: number) => {
      const next = files.filter((_, i) => i !== index);
      syncFilesToInput(next);
      setFiles(next);

      // If all removed, clear input.value so user can re-select same file later
      if (next.length === 0 && inputRef.current) {
        inputRef.current.value = "";
      }
    };

    // Keep the file input's FileList in sync with our state
    const syncFilesToInput = (list: File[]) => {
      const dt = new DataTransfer();
      list.forEach((f) => dt.items.add(f));
      if (inputRef.current) {
        inputRef.current.files = dt.files;
      }
    };

    // Expose startUpload method to parent via ref
    useImperativeHandle(reff, () => ({
      getFiles: () => files,
      startUpload: async (folder = "testimonies") => {
        if (files.length === 0) return [];

        // validation here too (extra safety)
        if (files.length > maxFiles)
          throw new Error(`Max ${maxFiles} files allowed`);
        for (const f of files) {
          if (f.size > maxSizeBytes)
            throw new Error(`${f.name} exceeds max size`);
        }

        // Build upload promises for parallel uploads with per-file progress reporting
        const uploadPromises = files.map((file, idx) => {
          const timestamp = Date.now();
          const safeName = file.name.replace(/\s+/g, "_");
          const objectPath = `${folder}/${timestamp}_${safeName}`;
          const storageRef = ref(storage, objectPath);
          const task = uploadBytesResumable(storageRef, file);

          return new Promise<UploadResult>((resolve, reject) => {
            task.on(
              "state_changed",
              (snapshot) => {
                const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                onProgress?.(idx, percent);
              },
              (err) => reject(err),
              async () => {
                try {
                  const url = await getDownloadURL(task.snapshot.ref);
                  resolve({ path: objectPath, url });
                } catch (err) {
                  reject(err);
                }
              }
            );
          });
        });

        // Use allSettled so we can handle partial failures
        const settled = await Promise.allSettled(uploadPromises);
        const successes = settled
          .filter(
            (s): s is PromiseFulfilledResult<UploadResult> =>
              s.status === "fulfilled"
          )
          .map((s) => s.value);
        const failures = settled.filter((s) => s.status === "rejected");

        if (failures.length) {
          // you can throw or return partial results depending on desired UX
          // throw new Error("One or more uploads failed");
          console.warn("Some uploads failed", failures);
        }

        // Clear selected files after upload
        setFiles([]);
        if (inputRef.current) inputRef.current.value = "";

        return successes;
      },
    }));

    return (
      <div className="space-y-2 md:col-span-2">
        <h3 className="text-primary-200 font-semibold">
          Upload testimony related files
        </h3>
        <input
          ref={inputRef}
          type="file"
          multiple
          name="testimony_files"
          className=" mt-1 text-sm file:text-dark text-primary-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0  file:bg-white hover:file:bg-primary-200"
          onChange={handleFileChange}
        />
        <p className="text-xs text-white">
          Upload up to 5 files. PDF | JPG | PNG or video. Max 10 MB per file.
        </p>
        {fileError && <p className="text-xs text-red-600">{fileError}</p>}
        {files.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {files.map((file, idx) => (
              <div
                key={file.name + idx}
                className="flex items-center bg-gray-100 rounded px-3 py-1 text-sm shadow"
              >
                <span className="truncate max-w-[120px]">{file.name}</span>
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-700"
                  onClick={() => removeFile(idx)}
                  aria-label={`Remove ${file.name}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
