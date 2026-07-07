import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { MenDescription } from "@/components/ministries/menDescription";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men Ministry",
  description:
    "Join the Men of Valor at City of David Tabernacle for Bible study, mentorship, and outreach that builds men in faith, accountability, and leadership.",
  alternates: {
    canonical: absoluteUrl("/ministries/men"),
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
