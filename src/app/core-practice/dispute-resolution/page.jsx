import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DisputeResolution() {
  return (
    <PageLayout>
      <PageHeader>Dispute Resolution</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our team both prevent and resolve disputes by providing clients with
          practical, creative legal advice that focuses on their strategic and
          commercial objectives.
          <br />
          <br />
          Our experience includes the full spectrum of dispute resolution and
          litigation mechanisms ranging from negotiation, mediation,
          conciliation and conflict resolution.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
