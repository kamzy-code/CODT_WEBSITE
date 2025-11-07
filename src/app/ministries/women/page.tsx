import { ComingSoon } from "@/components/comingSoon";
import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { WomenDescription } from "@/components/ministries/womenDescription";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Women Ministry" description="Explore the Women of Purpose"></PageHeader>
      <WomenDescription></WomenDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
