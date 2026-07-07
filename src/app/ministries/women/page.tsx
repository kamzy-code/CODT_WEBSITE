import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { WomenDescription } from "@/components/ministries/womenDescription";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women Ministry",
  description:
    "Join the Women of Purpose at City of David Tabernacle for Bible study, mentorship, and community outreach that empowers women in faith and leadership.",
  alternates: {
    canonical: absoluteUrl("/ministries/women"),
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
