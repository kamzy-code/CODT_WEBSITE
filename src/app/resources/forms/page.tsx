import { PageHeader } from "@/components/pageHeader";
import { AlterCallComponent } from "@/components/resources/alter-call";
import { FirstTimerComponent } from "@/components/resources/first-timer";
import { TestimonyComponent } from "@/components/resources/testimony";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms",
  description:
    "Fill out various forms for City of David Tabernacle, including first-timer, alter call, and testimony forms.",
  alternates: {
    canonical: absoluteUrl("/resources/forms"),
  },
};

export default function Forms() {
  return (
    <div>
      <PageHeader title="Forms" description="Fill out a form"></PageHeader>
      <FirstTimerComponent></FirstTimerComponent>
      <AlterCallComponent></AlterCallComponent>
      <TestimonyComponent></TestimonyComponent>
    </div>
  );
}
