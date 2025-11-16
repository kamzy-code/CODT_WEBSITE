import { BranchesDescription } from "@/components/about/branchesDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches",
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
