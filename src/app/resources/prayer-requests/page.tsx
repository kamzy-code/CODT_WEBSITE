import { PageHeader } from "@/components/pageHeader";
import { PrayerRequestCompnent } from "@/components/resources/prayer-request";

export default function PrayerRequest (){
    return (
        <div>
            <PageHeader title="Prayer Request" description="Submit a prayer request"></PageHeader>
            <PrayerRequestCompnent></PrayerRequestCompnent>
        </div>
    )
}