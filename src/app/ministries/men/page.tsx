import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { MenDescription } from "@/components/ministries/menDescription";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men Ministry",
  description:
    "Explore the Youth, Women, Men, and Children ministries at City of David Tabernacle.",
    alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/ministries/men`,
  },
};

export default function MenMinistry() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Men Ministry" description="Explore the Men of Valor" />
      <MenDescription></MenDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
