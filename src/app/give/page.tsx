import { AccountInfo } from "@/components/accountInfo";
import { PageHeader } from "@/components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Giving" description="Partner with us in the work of restoration"></PageHeader>
      <AccountInfo></AccountInfo>
    </div>
  );
}
