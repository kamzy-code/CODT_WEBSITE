import { BranchesCards } from "./branchesCard";

export function BranchesSection() {
  return (
    <section className="flex items-center justify-center section-padding">
      <div className="container-max flex flex-col items-center justify-center gap-8 w-full py-12">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl flex flex-col items-center space-y-5 text-center">
          <h3 className="font-medium text-primary-900 text-2xl md:text-4xl">
            Branches
          </h3>
          <h2 className="font-medium text-dark text-xl md:text-4xl leading-10 md:leading-15">
            {"Locate a branch near you"}
          </h2>
        </div>

        <div>
          <BranchesCards></BranchesCards>
        </div>
      </div>
    </section>
  );
}
