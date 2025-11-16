import { PastorsImageSlider } from "@/components/about/pastorImageSlider";
import { PastorsDescription } from "@/components/about/pastors";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastor",
  description: "Learn about the Leadership of City of David Tabernacle",
  alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/pastor`,
  },
};

export default function Pastor() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Pastors" description="Meet Our Pastors"></PageHeader>
      <PastorsDescription></PastorsDescription>
      <PastorsImageSlider></PastorsImageSlider>
    </div>
  );
}
