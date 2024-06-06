import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CriminalLaw() {
  return (
    <PageLayout>
      <PageHeader>Criminal Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our law office has a special department consisting of a specialized
          team of lawyers dealing with criminal law, which includes criminal
          law, economic crimes, customs offenses and offenses related to
          criminal defense.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
