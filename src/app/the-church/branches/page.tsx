import { BranchesDescription } from "@/components/about/branchesDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Learn about the Branches of City of David Tabernacle around the world and locate a branch near you",
  alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/branches`,
  },
};

export default function Branches() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Branches"
        description="Locate a branch near you"
      ></PageHeader>
      <BranchesDescription></BranchesDescription>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
