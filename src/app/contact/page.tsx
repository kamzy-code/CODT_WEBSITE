import { Connect } from "@/components/contact/connect";
import { ContactDescription } from "@/components/contact/contactDescription";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageHeader } from "@/components/pageHeader";

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
