export type Sermon = {
  id: string;
  title: string;
  thumbnail: string;
};

export type FormEmailData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
};

export type PrayerRequestEmailData = FormEmailData & {
  prayer_request: string;
};

export type TestimonyEmailData = FormEmailData & {
  testimony: string;
  uploaded_paths?: string[];
  uploaded_urls?: string[];
};