"use server";

import { sendAlterCallMail } from "@/lib/sendEmail";

export type AlterCallError = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  submitError?: string;
};

export type AlterCallFormState = {
  success: boolean;
  errors?: AlterCallError;
  values?: Record<string, string>;
};

export async function submitAlterCallForm(
  prevState: AlterCallFormState | undefined,
  formData: FormData
) {
  const errors: AlterCallError = {};

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
    const response: AlterCallFormState = { success: false, errors, values };
    return response;
  }

  try {
    await sendAlterCallMail(values);
    return { success: true, errors: {} } as AlterCallFormState; // empty error object indicates success in your current types
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send Alter Call email";
    console.error("Error sending Alter Call email:", message);
    return {
      success: false,
      errors: {
        submitError: "Error submitting your request, Please try again",
      },
      values,
    } as AlterCallFormState;
  }
}
