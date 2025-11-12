"use client";
import Form from "next/form";
import { FormInput } from "../ui/formInput";
import { TextArea } from "../ui/textArea";
import { useActionState } from "react";
import { useState, useRef, useTransition } from "react";
import type { UploadResult, FileUploadHandle } from "../ui/fileUplaod";
import { sendTestimonyForm, TestimonyFormState } from "@/app/action/testimony";
import { FileUpload } from "../ui/fileUplaod";

export function TestimonyForm() {
  const initialFormState: TestimonyFormState = {
    success: false,
    errors: {},
  };
  const [newFormState, formAction, isPending] = useActionState(
    sendTestimonyForm,
    initialFormState
  );

  const fileUploadRef = useRef<FileUploadHandle | null>(null);
  const [uploadProgress, setUploadProgress] = useState<
    Record<number, number>
  >({});
  const [uploadedFiles, setUploadedFiles] = useState<UploadResult[]>([]);
  const [uploading, setUploading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isClientTransitionPending, startClientTransition] = useTransition(); // this tracks the manual action invocation so React's pending state stays accurate

  function validateForm(formEl: HTMLFormElement) {
    const fd = new FormData(formEl);
    const name = (fd.get("name") ?? "").toString().trim();
    const email = (fd.get("email") ?? "").toString().trim();
    const phone = (fd.get("phone") ?? "").toString().trim();
    const address = (fd.get("address") ?? "").toString().trim();
    const city = (fd.get("city") ?? "").toString().trim();
    const state = (fd.get("state") ?? "").toString().trim();
    const country = (fd.get("country") ?? "").toString().trim();
    const testimony = (fd.get("testimony") ?? "").toString().trim();

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !testimony
    ) {
      return { ok: false, message: "Please fill required fields" }; // this short-circuits on any missing required data
    }

    return { ok: true };
  }

  const handleUploadProgress = (fileIndex: number, percent: number) => {
    setUploadProgress((prev) => ({ ...prev, [fileIndex]: percent })); // this bubbles upload progress back into the UI
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const validation = validateForm(form);
    if (!validation.ok) {
      setSubmitError(validation.message as string);
      return;
    }

    setUploading(true);
    setUploadProgress({});
    let results: UploadResult[] = [];

    try {
      const fileHandle = fileUploadRef.current;
      if (fileHandle) {
        results = await fileHandle.startUpload("testimonies"); // this waits for storage upload before submitting
        setUploadedFiles(results);
      }

      const formData = new FormData(form);
      for (const r of results) {
        formData.append("uploaded_paths[]", r.path);
        formData.append("uploaded_urls[]", r.url);
      }

      startClientTransition(() => {
        formAction(formData); // this triggers the server action inside a transition to keep isPending in sync
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Upload failed";
      setSubmitError(message);
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Form action={formAction} onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <FormInput
          title="Full Name"
          type="text"
          placeholder="Full Name"
          name="name"
          theme="light"
          colSpan="md:col-span-2"
          compulsory
          error={newFormState?.errors?.name}
          defaultValue={newFormState?.values?.name}
        />

        <FormInput
          title="Email"
          type="email"
          placeholder="Email"
          name="email"
          theme="light"
          compulsory
          error={newFormState?.errors?.email}
          defaultValue={newFormState?.values?.email}
        />

        <FormInput
          title="Phone/Mobile"
          type="text"
          placeholder="Phone"
          name="phone"
          theme="light"
          compulsory
          error={newFormState?.errors?.phone}
          defaultValue={newFormState?.values?.phone}
        />

        <FormInput
          title="Address"
          type="text"
          placeholder="Address"
          name="address"
          theme="light"
          compulsory
          error={newFormState?.errors?.address}
          defaultValue={newFormState?.values?.address}
        />

        <FormInput
          title="City"
          type="text"
          placeholder="City"
          name="city"
          theme="light"
          compulsory
          error={newFormState?.errors?.city}
          defaultValue={newFormState?.values?.city}
        />

        <FormInput
          title="State"
          type="text"
          placeholder="State"
          name="state"
          theme="light"
          compulsory
          error={newFormState?.errors?.state}
          defaultValue={newFormState?.values?.state}
        />

        <FormInput
          title="Country"
          type="text"
          placeholder="Country"
          name="country"
          theme="light"
          compulsory
          error={newFormState?.errors?.country}
          defaultValue={newFormState?.values?.country}
        />

        <TextArea
          title="Testimony"
          placeholder="Share your testimony"
          name="testimony"
          theme="light"
          compulsory
          colSpan="md:col-span-2"
          error={newFormState?.errors?.testimony}
          defaultValue={newFormState?.values?.testimony}
        />

        <FileUpload
          ref={fileUploadRef}
          fileError={newFormState.errors?.testimony_files}
          onProgress={handleUploadProgress}
        ></FileUpload>

        {uploading && (
          <div className="md:col-span-2 space-y-1 text-sm text-primary-200">
            {Object.entries(uploadProgress).map(([index, percent]) => (
              <p key={index}>{`Uploading file ${Number(index) + 1}: ${percent}%`}</p>
            ))}
            {Object.keys(uploadProgress).length === 0 && (
              <p>Preparing uploads...</p>
            )}
          </div>
        )}

        {uploadedFiles.length > 0 && !uploading && (
          <div className="md:col-span-2 text-sm text-primary-200 space-y-1">
            <p>Files attached:</p>
            <ul className="list-disc list-inside">
              {uploadedFiles.map((file) => (
                <li key={file.path}>{file.path.split("/").pop() ?? file.path}</li> // simple confirmation of files attached after upload completes
              ))}
            </ul>
          </div>
        )}

        {submitError && (
          <p className="md:col-span-2 text-sm text-red-600">{submitError}</p>
        )}

        <button
          className="btn-secondary hover:bg-white hover:text-dark active:bg-white active:text-dark  h-12 md:col-span-2 disabled:bg-gray-200 disabled:text-dark"
          type="submit"
          disabled={isPending || uploading || isClientTransitionPending}
        >
          {uploading
            ? "Uploading..."
            : isPending
            ? "Sending..."
            : isClientTransitionPending
            ? "Submitting..."
            : "Share My Testimony"}
        </button>
      </div>
    </Form>
  );
}
