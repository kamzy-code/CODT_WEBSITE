import { BranchesDescription } from "@/components/about/branchesDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Branches" description="Locate a branch near you"></PageHeader>
      <BranchesDescription></BranchesDescription>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
