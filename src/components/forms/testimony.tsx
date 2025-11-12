"use client";
import Form from "next/form";
import { FormInput } from "../ui/formInput";
import { TextArea } from "../ui/textArea";
import { useActionState } from "react";
import { useState, useRef } from "react";
import { FileUploadHandle } from "../ui/fileUplaod";
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
  const [uploadProgress, setUploadProgress] = useState<Record<number, number>>(
    {}
  );
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<{ path: string; url: string }>
  >([]);
  const [uploading, setUploading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

    if (!name || !email || phone || address || city || state || country || !testimony) {
      return { ok: false, message: "Please fill required fields" };
    }

    return { ok: true };
  }

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const validation = validateForm(form);
    if (!validation.ok) {
      // setSubmitError(validation.message as string);
      form.requestSubmit();
      return;
    }

    // If there are files in the FileUpload, start upload
    try {
      const fileHandle = fileUploadRef.current;
      if (fileHandle) {
        setUploading(true);
        const results = await fileHandle.startUpload("testimonies");
        setUploadedFiles(results);
        setUploading(false);
      }

      // Append hidden inputs to the form so the server action receives uploaded paths
      // You can also call an API route directly via fetch(JSON)
      // Add inputs for each uploaded path
      for (const r of uploadedFiles) {
        const pathInput = document.createElement("input");
        pathInput.type = "hidden";
        pathInput.name = "uploaded_paths[]";
        pathInput.value = r.path;
        form.appendChild(pathInput);

        const urlInput = document.createElement("input");
        urlInput.type = "hidden";
        urlInput.name = "uploaded_urls[]";
        urlInput.value = r.url;
        form.appendChild(urlInput);
      }

      // After uploads finished and metadata appended submit the form using formAction
      // Using next/form's action requires form submission: calling formAction via the action prop is handled by <Form action={formAction}>. To integrate with that, we can programmatically submit here:
      // Option A: call fetch to an API route (recommended)
      // Option B: create a hidden submit to trigger <Form action={formAction}>
      form.requestSubmit(); // triggers the <Form action={formAction}> flow
    } catch (err: any) {
      setUploading(false);
      setSubmitError(err?.message ?? "Upload failed");
      console.error(err);
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
          defaultValue={newFormState?.values?.name}
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
          defaultValue={newFormState?.values?.prayer_request}
        />

        <FileUpload
          fileError={newFormState.errors?.testimony_files}
          isPending={isPending}
          onUploaded={handleUploaded}
        ></FileUpload>

        {uploads.length > 0 &&
          uploads.map((u, i) => (
            <input
              key={u.path + i}
              type="hidden"
              name="uploaded_paths[]"
              value={u.path}
            />
          ))}
        {uploads.length > 0 &&
          uploads.map((u, i) => (
            <input
              key={u.url + i}
              type="hidden"
              name="uploaded_urls[]"
              value={u.url}
            />
          ))}

        <button
          className="btn-secondary hover:bg-white hover:text-dark active:bg-white active:text-dark  h-12 md:col-span-2 disabled:bg-gray-200 disabled:text-dark"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Share My Testimony"}
        </button>
      </div>
    </Form>
  );
}
