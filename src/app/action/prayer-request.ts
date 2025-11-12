"use server";

export type PrayerRequestError = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  prayer_request?: string;
};

export type PrayerRequestFormState = {
  success: boolean;
  errors?: PrayerRequestError;
  values?: Record<string, string>;
};

export async function sendPrayerRequest(
  prevState: PrayerRequestFormState | undefined,
  formData: FormData
) {
  const errors: PrayerRequestError = {};

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
  const prayer_request = get("prayer_request");

  if (!name) errors.name = "This field is required";
  if (!email) errors.email = "This field is required";
  if (!phone) errors.phone = "This field is required";
  if (!address) errors.address = "This field is required";
  if (!city) errors.city = "This field is required";
  if (!state) errors.state = "This field is required";
  if (!country) errors.country = "This field is required";
  if (!prayer_request) errors.prayer_request = "This field is required";

  const values = {
    name,
    email,
    phone,
    address,
    city,
    state,
    country,
    prayer_request,
  };

  if (Object.keys(errors).length > 0) {
    const response: PrayerRequestFormState = { success: false, errors, values };
    return response;
  }

  await new Promise((resolve) => setTimeout(() => resolve(100), 3000));

  console.log(
    name,
    email,
    phone,
    address,
    city,
    state,
    country,
    prayer_request
  );
  // At this point the form is valid. Perform the server-side action you need here.
  // For example, save to a database, call an API, or send an email.
  // This implementation simply returns a success shape. Replace with real logic as needed.

  // Example: send to an internal API route (uncomment and adapt if you have one)
  // await fetch("/api/prayer-requests", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, phone, address, city, state, country, prayer_request }),
  // });

  return { success: true, errors: {} } as PrayerRequestFormState; // empty error object indicates success in your current types
}
