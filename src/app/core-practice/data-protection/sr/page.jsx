import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DataProtectionSr() {
  return (
    <PageLayout>
      <PageHeader>Zaštita Podataka</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Politika zaštite podataka i privatnosti ima uticaja na sva poslovna
          područja i industrijske sektore. Ova kompleksna i sofisticirana pravna
          oblast zahteva specifična znanja vezana za sigurnost podataka,
          dostupnost i pristup informacijama itd.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
