import { PastorsImageSlider } from "@/components/about/pastorImageSlider";
import { PastorsDescription } from "@/components/about/pastors";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Pastors" description="Meet Our Pastors"></PageHeader>
      <PastorsDescription></PastorsDescription>
      <PastorsImageSlider></PastorsImageSlider>
    </div>
  );
}
