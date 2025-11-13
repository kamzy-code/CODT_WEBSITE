import { DiscoverMinistries } from "@/components/home/discoverMinistries";
import { FaithWalk } from "@/components/home/faithWalk";
import { LandingSection } from "@/components/home/landing";
import { LatestSermons } from "@/components/home/latestSermons";
import { Mandate } from "@/components/home/mandate";
import { MeetPastor } from "@/components/home/meetPasor";
import { MonthlyTheme } from "@/components/home/monthlyTheme";
import { StoriesOfRestoration } from "@/components/home/stories";
import { UpcomingEvents } from "@/components/home/upcomingEvents";
import { WorshipWithUs } from "@/components/home/worshipWithUs";
import { PageLoader } from "@/components/pageLoader";
import { getMonthlyTheme } from "@/lib/dbQueries";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const monthlyTheme = await getMonthlyTheme();
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
        <WorshipWithUs scripture={true}></WorshipWithUs>
        <Mandate></Mandate>
        <FaithWalk></FaithWalk>
        <MonthlyTheme theme={monthlyTheme}></MonthlyTheme>
        <UpcomingEvents></UpcomingEvents>
        <MeetPastor></MeetPastor>
        <DiscoverMinistries></DiscoverMinistries>
        <StoriesOfRestoration></StoriesOfRestoration>
        <LatestSermons></LatestSermons>
      </main>
    </Suspense>
  );
}
