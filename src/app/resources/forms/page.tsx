import { PageHeader } from "@/components/pageHeader";
import { AlterCallComponent } from "@/components/resources/alter-call";
import { FirstTimerComponent } from "@/components/resources/first-timer";
import { TestimonyComponent } from "@/components/resources/testimony";

export default function Forms(){
    return (
        <div>
            <PageHeader title="Forms" description="Fill out a form"></PageHeader>
            <FirstTimerComponent></FirstTimerComponent>
            <AlterCallComponent></AlterCallComponent>
            <TestimonyComponent></TestimonyComponent>
        </div>
    )
}