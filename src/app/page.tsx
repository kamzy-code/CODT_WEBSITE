import { FaithWalk } from "@/components/home/faithWalk";
import { LandingSection } from "@/components/home/landing";
import { Mandate } from "@/components/home/mandate";
import { MonthlyTheme } from "@/components/home/monthlyTheme";
import { Scripture } from "@/components/home/scripture";
import { UpcomingEvents } from "@/components/home/upcomingEvents";
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
        <FaithWalk></FaithWalk>
        <MonthlyTheme></MonthlyTheme>
        <UpcomingEvents></UpcomingEvents>
      </main>
    </Suspense>
  );
}
