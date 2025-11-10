import { PageHeader } from "@/components/pageHeader";
import { PrayerRequestComponent } from "@/components/resources/prayer-request";

export default function PrayerRequest (){
    return (
        <div>
            <PageHeader title="Prayer Request" description="Submit a prayer request"></PageHeader>
            <PrayerRequestComponent></PrayerRequestComponent>
        </div>
    )
}