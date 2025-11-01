import { AboutDescription } from "@/components/about/description";
import { JoinUs } from "@/components/about/joinUs";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="About Us" description="About City of David Tabernacle"></PageHeader>
      <AboutDescription></AboutDescription>
      <JoinUs></JoinUs>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
