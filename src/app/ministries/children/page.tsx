import { ChildrenDescription } from "@/components/ministries/childrenDescription";
import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children Ministry",
  description:
    "Explore Children's Ministry at City of David Tabernacle — interactive Bible lessons, worship, and Sunday School in a safe, loving environment.",
  alternates: {
    canonical: absoluteUrl("/ministries/children"),
  },
};

export default function ChildrenMinistry() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Children Mnistry"
        description="Explore Children's Ministry"
      ></PageHeader>
      <ChildrenDescription></ChildrenDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
