
import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { YouthDescription } from "@/components/ministries/youthDescription";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Youth Ministry" description="Explore the Youth in Christ"></PageHeader>
      <YouthDescription></YouthDescription>
      <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
