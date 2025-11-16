import { PageHeader } from "@/components/pageHeader";
import { SermonsGrid } from "@/components/resources/sermons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
};

export default function SermonsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <PageHeader
        title="Sermons"
        description="Listen to recent Sermons"
      ></PageHeader>
      <div className="flex-1">
        <SermonsGrid></SermonsGrid>
      </div>
    </div>
  );
}
