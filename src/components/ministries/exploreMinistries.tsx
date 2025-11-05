import { MinistryCards } from "../home/minstryCards";

export function ExploreMinistries() {
  return (
    <section className="flex items-center justify-center section-padding pt-0">
      <div className="container-max flex flex-col items-center justify-center gap-8 w-full py-12">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center space-y-5 text-center">
          <h3 className="font-extrabold text-primary-900 text-lg md:text-2xl">
            Explore Other Ministries
          </h3>
          <h2 className="font-medium text-dark text-xl md:text-4xl leading-10 md:leading-15">
            {
              "There’s a place for you to grow, serve, and shine at City of David Tabernacle."
            }
          </h2>
        </div>

        <div>
          <MinistryCards gridStyle="grid-cols-1 lg:grid-cols-3"></MinistryCards>
        </div>
      </div>
    </section>
  );
}
