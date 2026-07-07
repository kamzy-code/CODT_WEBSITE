import { Connect } from "@/components/contact/connect";
import { ContactDescription } from "@/components/contact/contactDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";
import { absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us at City of David Tabernacle",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact"
        description="Get in touch with us"
      ></PageHeader>
      <ContactDescription></ContactDescription>
      <Connect></Connect>
      <WorshipWithUs></WorshipWithUs>
    </div>
  );
}
