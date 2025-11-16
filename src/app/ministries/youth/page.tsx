import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { YouthDescription } from "@/components/ministries/youthDescription";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Ministry",
  description:
    "Explore the Youth, Women, Men, and Children ministries at City of David Tabernacle.",
    alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/ministries/youth`,
  },
};

export default function YouthMinistry() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Youth Ministry"
        description="Explore the Youth in Christ"
      ></PageHeader>
      <YouthDescription></YouthDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
