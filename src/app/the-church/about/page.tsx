import { BranchesSection } from "@/components/about/branchesSection";
import { AboutDescription } from "@/components/about/aboutDescription";
import { JoinUs } from "@/components/about/joinUs";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        description="About City of David Tabernacle"
      ></PageHeader>
      <AboutDescription></AboutDescription>
      <JoinUs></JoinUs>
      <BranchesSection></BranchesSection>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
