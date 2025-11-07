import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { MenDescription } from "@/components/ministries/menDescription";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Men Ministry"
        description="Explore the Men of Valor"
      />
      <MenDescription></MenDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
