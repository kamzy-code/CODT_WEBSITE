import { BranchesDescription } from "@/components/about/branchesDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl, buildBranchesJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches - Restoration Chapel & Victory Chapel",
  description:
    "Locate a City of David Tabernacle branch near you: Restoration Chapel in Owerri, Nigeria, and Restoration Chapel (Victory Chapel) in Maryland, USA.",
  alternates: {
    canonical: absoluteUrl("/the-church/branches"),
  },
};

export default function Branches() {
  const branchesJsonLd = buildBranchesJsonLd();

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchesJsonLd) }}
      />
      <PageHeader
        title="Branches"
        description="Locate a branch near you"
      ></PageHeader>
      <BranchesDescription></BranchesDescription>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
