import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { WomenDescription } from "@/components/ministries/womenDescription";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women Ministry",
  description:
    "Explore the Youth, Women, Men, and Children ministries at City of David Tabernacle.",
    alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/ministries/women`,
  },
};

export default function WomenMinistry() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Women Ministry"
        description="Explore the Women of Purpose"
      ></PageHeader>
      <WomenDescription></WomenDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
