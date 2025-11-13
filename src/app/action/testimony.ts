"use server";

import { sendTestimonyMail } from "@/lib/sendEmail";

export type TestimonyError = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  testimony?: string;
  submitError?: string;
};

export type TestimonyFormState = {
  success: boolean;
  errors?: TestimonyError;
  values?: Record<string, string | string[]>;
};

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export async function submitTestimonyForm(
  prevState: TestimonyFormState | undefined,
  formData: FormData
) {
  const errors: TestimonyError = {};

  const get = (key: string) => {
    const v = formData.get(key);
    return v === null ? "" : String(v).trim();
  };

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const address = get("address");
  const city = get("city");
  const state = get("state");
  const country = get("country");
  const testimony = get("testimony");
  const uploaded_paths = formData
    .getAll("uploaded_paths[]")
    .map((v) => String(v)); //this is populated by the client when files are uploaded successfully
  const uploaded_urls = formData
    .getAll("uploaded_urls[]")
    .map((v) => String(v)); //these are the matching public URLs for those uploaded files

  if (!name) errors.name = "This field is required";
  if (!email) errors.email = "This field is required";
  if (!phone) errors.phone = "This field is required";
  if (!address) errors.address = "This field is required";
  if (!city) errors.city = "This field is required";
  if (!state) errors.state = "This field is required";
  if (!country) errors.country = "This field is required";
  if (!testimony) errors.testimony = "This field is required";

  const values = {
    name,
    email,
    phone,
    address,
    city,
    state,
    country,
    testimony,
    uploaded_paths,
    uploaded_urls,
  };

  if (Object.keys(errors).length > 0) {
    const response: TestimonyFormState = { success: false, errors, values };
    return response;
  }

  try {
    await sendTestimonyMail(values);
    return { success: true, errors: {} } as TestimonyFormState; // empty error object indicates success in your current types
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send Testimony email";
    console.error("Error sending Testimony email:", message);
    return {
      success: false,
      errors: {
        submitError: "Error submitting your Testimony, Please try again",
      },
      values,
    } as TestimonyFormState;
  }
}
