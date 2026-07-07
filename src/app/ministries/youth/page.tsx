import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { YouthDescription } from "@/components/ministries/youthDescription";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Ministry",
  description:
    "Explore the Youth in Christ ministry at City of David Tabernacle — worship nights, Bible study, mentorship, and outreach for young people.",
  alternates: {
    canonical: absoluteUrl("/ministries/youth"),
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
