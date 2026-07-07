import { PastorsImageSlider } from "@/components/about/pastorImageSlider";
import { PastorsDescription } from "@/components/about/pastors";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl, buildPersonJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bishop Joel Njoku Andrew",
  description:
    "Meet Bishop Joel Njoku Andrew (also known as Bishop Joel Andrew), founder and pastor of City of David Tabernacle, Restoration Chapel, and Victory Chapel.",
  alternates: {
    canonical: absoluteUrl("/the-church/pastor"),
  },
};

export default function Pastor() {
  const personJsonLd = buildPersonJsonLd();

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHeader title="Pastors" description="Meet Our Pastors"></PageHeader>
      <PastorsDescription></PastorsDescription>
      <PastorsImageSlider></PastorsImageSlider>
    </div>
  );
}
