import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { MenDescription } from "@/components/ministries/menDescription";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men Ministry",
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
