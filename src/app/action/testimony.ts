"use server";

export type TestimonyError = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  testimony?: string;
  testimony_files?: string;
};

export type TestimonyFormState = {
  success: boolean;
  errors?: TestimonyError;
  values?: Record<string, string>;
};

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export async function sendTestimonyForm(
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
  const testimony_files = formData.getAll("testimony_files") as File[];
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
  };

  if (testimony_files) {
    if (testimony_files.length > 5) {
      errors.testimony_files = `You exceeded the limit of 5 files`;
      const response: TestimonyFormState = { success: false, errors, values };
      return response;
    }
    // Iterate and Validate
    for (const file of testimony_files) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        errors.testimony_files = `File **${file.name}** exceeds the 10MB limit.`;
        const response: TestimonyFormState = { success: false, errors, values };
        return response;
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    const response: TestimonyFormState = { success: false, errors, values };
    return response;
  }

  await new Promise((resolve) => setTimeout(() => resolve(100), 3000));

  console.log("[sendTestimonyForm] Submission received", {
    name,
    email,
    phone,
    address,
    city,
    state,
    country, 
    testimonyPreview: testimony.slice(0, 50), // this logs only the first 50 chars so we do not spam the console
    uploaded_paths,
    uploaded_urls,
    receivedFileCount: testimony_files?.length ?? 0,
  });
  // At this point the form is valid. Perform the server-side action you need here.
  // For example, save to a database, call an API, or send an email.
  // This implementation simply returns a success shape. Replace with real logic as needed.

  // Example: send to an internal API route (uncomment and adapt if you have one)
  // await fetch("/api/prayer-requests", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, phone, address, city, state, country, prayer_request }),
  // });

  return { success: true, errors: {} } as TestimonyFormState; // empty error object indicates success in your current types
}
