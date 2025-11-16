import { AccountInfo } from "@/components/accountInfo";
import { PageHeader } from "@/components/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
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
