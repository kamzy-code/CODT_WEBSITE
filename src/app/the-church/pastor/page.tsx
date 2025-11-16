import { PastorsImageSlider } from "@/components/about/pastorImageSlider";
import { PastorsDescription } from "@/components/about/pastors";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastor",
};

export default function Pastor() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Pastors" description="Meet Our Pastors"></PageHeader>
      <PastorsDescription></PastorsDescription>
      <PastorsImageSlider></PastorsImageSlider>
    </div>
  );
}
