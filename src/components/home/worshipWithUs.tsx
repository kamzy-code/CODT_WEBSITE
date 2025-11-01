
import { WorshipCards } from "./worshipCards";

export function WorshipWithUs({scripture}: {scripture?: boolean}) {
  return (
    <section className="flex items-center justify-center section-padding gradient-background">
      <div className="container-max flex flex-col items-center justify-center gap-8 w-full py-12">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center space-y-5 text-center">
          <h3 className="font-medium text-primary-200 text-lg md:text-2xl">
            Service Times
          </h3>
          <h2 className="font-medium text-white text-xl md:text-4xl leading-10 md:leading-15">
            {
              "We’d love to worship with you. Join us this week at City of David Tabernacle."
            }
          </h2>
        </div>

        <div>
          <WorshipCards scripture={scripture}></WorshipCards>
        </div>
      </div>
    </section>
  );
}
