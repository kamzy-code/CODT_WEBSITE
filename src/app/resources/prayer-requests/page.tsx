import { PageHeader } from "@/components/pageHeader";
import { PrayerRequestComponent } from "@/components/resources/prayer-request";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Request",
  description: "Submit a prayer request to City of David Tabernacle",
  alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/resources/prayer-requests`,
  },
};

export default function PrayerRequest() {
  return (
    <div>
      <PageHeader
        title="Prayer Request"
        description="Submit a prayer request"
      ></PageHeader>
      <PrayerRequestComponent></PrayerRequestComponent>
    </div>
  );
}
