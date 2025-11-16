import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { YouthDescription } from "@/components/ministries/youthDescription";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Ministry",
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
