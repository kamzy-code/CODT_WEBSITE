
import { StoriesCard } from "./storiesCard";
import Link from "next/link";

export function StoriesOfRestoration() {

  return (
    <section
      className="flex items-center justify-center section-padding bg-dark rounded-t-4xl"
    >
      <div className="container-max flex flex-col items-center justify-center gap-12 w-full p-12">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center space-y-5 text-center">
          <h3 className="font-medium text-primary-200 text-lg md:text-2xl">
            Stories of Restoration
          </h3>
          <h2 className="font-medium text-white text-xl md:text-4xl leading-10 md:leading-15">
            {
              "Every testimony is proof that God is still working miracles today. Be inspired by what He’s doing in our midst"
            }
          </h2>
        </div>

        <div>
          <StoriesCard></StoriesCard>
        </div>

           <Link href={"/resources/forms"}>
              <button className="btn-secondary h-12 md:h-16 hover:bg-white hover:text-dark hover:border-0">
                Share Yours
              </button>
            </Link>
      </div>
    </section>
  );
}
