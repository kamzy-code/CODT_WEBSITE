import { AccountInfo } from "@/components/accountInfo";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Partner with us in the work of restoration, learn about the available giving options for City of David Tabernacle",
  alternates: {
    canonical: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.com"}/give`,
  },
};

export default function Give() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Giving"
        description="Partner with us in the work of restoration"
      ></PageHeader>
      <AccountInfo></AccountInfo>
    </div>
  );
}
