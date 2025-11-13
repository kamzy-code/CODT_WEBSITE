"use server";

import { sendFirstTimerMail } from "@/lib/sendEmail";

export type FirstTimerError = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  submitError?: string;
};

export type FirstTimerFormState = {
  success: boolean;
  errors?: FirstTimerError;
  values?: Record<string, string>;
};

export async function submitFirstTimerForm(
  prevState: FirstTimerFormState | undefined,
  formData: FormData
) {
  const errors: FirstTimerError = {};

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

  if (!name) errors.name = "This field is required";
  if (!email) errors.email = "This field is required";
  if (!phone) errors.phone = "This field is required";
  if (!address) errors.address = "This field is required";
  if (!city) errors.city = "This field is required";
  if (!state) errors.state = "This field is required";
  if (!country) errors.country = "This field is required";

  const values = {
    name,
    email,
    phone,
    address,
    city,
    state,
    country,
  };

  if (Object.keys(errors).length > 0) {
    const response: FirstTimerFormState = { success: false, errors, values };
    return response;
  }

  try {
    await sendFirstTimerMail(values);
    return { success: true, errors: {} } as FirstTimerFormState; // empty error object indicates success in your current types
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send First Timer email";
    console.error("Error sending First Timer email:", message);
    return {
      success: false,
      errors: {
        submitError: "Error submitting your request, Please try again",
      },
      values,
    } as FirstTimerFormState;
  }
}
