
import { ChildrenDescription } from "@/components/ministries/childrenDescription";
import { ExploreMinistries } from "@/components/ministries/exploreMinistries";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
     <PageHeader title="Children Mnistry" description="Explore Children's Ministry"></PageHeader>
     <ChildrenDescription></ChildrenDescription>
     <ExploreMinistries></ExploreMinistries>
    </div>
  );
}
