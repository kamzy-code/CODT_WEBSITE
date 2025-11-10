"use client";
import Form from "next/form";
import { FormInput } from "../ui/formInput";
import { TextArea } from "../ui/textArea";
import {
  PrayerRequestFormState,
  sendPrayerRequest,
} from "@/app/action/prayer-request";
import { useActionState } from "react";
import { useState, useRef } from "react";
import { X } from "lucide-react";

export function TestimonyForm() {
  const initialFormState: PrayerRequestFormState = {
    success: false,
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    sendPrayerRequest,
    initialFormState
  );

   const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files => files.filter((_, i) => i !== index));
    // Optionally clear input if all files removed
    if (files.length === 1 && inputRef.current) inputRef.current.value = "";
  };

  return (
    <Form action={formAction} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <FormInput
          title="Full Name"
          type="text"
          placeholder="Full Name"
          name="name"
          theme="light"
          colSpan="md:col-span-2"
          compulsory
          error={state?.errors?.name}
          defaultValue={state?.values?.name}
        />

        <FormInput
          title="Email"
          type="email"
          placeholder="Email"
          name="email"
          theme="light"
          compulsory
          error={state?.errors?.email}
          defaultValue={state?.values?.email}
        />

        <FormInput
          title="Phone/Mobile"
          type="text"
          placeholder="Phone"
          name="phone"
          theme="light"
          compulsory
          error={state?.errors?.phone}
          defaultValue={state?.values?.phone}
        />

        <FormInput
          title="Address"
          type="text"
          placeholder="Address"
          name="address"
          theme="light"
          compulsory
          error={state?.errors?.address}
          defaultValue={state?.values?.address}
        />

        <FormInput
          title="City"
          type="text"
          placeholder="City"
          name="city"
          theme="light"
          compulsory
          error={state?.errors?.city}
          defaultValue={state?.values?.name}
        />

        <FormInput
          title="State"
          type="text"
          placeholder="State"
          name="state"
          theme="light"
          compulsory
          error={state?.errors?.state}
          defaultValue={state?.values?.state}
        />

        <FormInput
          title="Country"
          type="text"
          placeholder="Country"
          name="country"
          theme="light"
          compulsory
          error={state?.errors?.country}
          defaultValue={state?.values?.country}
        />

        <TextArea
          title="Testimony"
          placeholder="Share your testimony"
          name="testimony"
          theme="light"
          compulsory
          colSpan="md:col-span-2"
          error={state?.errors?.prayer_request}
          defaultValue={state?.values?.prayer_request}
        />

       <div className="space-y-2 md:col-span-2">
      <h3 className="text-primary-200 font-semibold">Upload testimony related files</h3>
      <input
        ref={inputRef}
        type="file"
        multiple
        name="testimony_files"
        className="bg-white p-4 rounded border border-gray-300 focus:outline-primary-600"
        onChange={handleFileChange}
      />
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
