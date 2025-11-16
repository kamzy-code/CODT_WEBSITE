import { PageHeader } from "@/components/pageHeader";
import { PrayerRequestComponent } from "@/components/resources/prayer-request";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Request",
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
