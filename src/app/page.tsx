import { LandingSection } from "@/components/home/landing";
import { Mandate } from "@/components/home/mandate";
import { Scripture } from "@/components/home/scripture";
import { PageLoader } from "@/components/pageLoader";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          {" "}
          <PageLoader></PageLoader>
        </div>
      }
    >
      <main>
        <LandingSection></LandingSection>
        <Scripture></Scripture>
        <Mandate></Mandate>
      </main>
    </Suspense>
  );
}
