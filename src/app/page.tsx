import { ComingSoon } from "@/components/comingSoon";
import { Suspense } from "react";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <ComingSoon></ComingSoon>
      </main>
    </Suspense>
  );
}
