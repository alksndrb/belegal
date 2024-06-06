import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DisputeResolutionSr() {
  return (
    <PageLayout>
      <PageHeader>Rešavanje Sporova i Parnica</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naš tim sprečava i rešava sporove pružajući klijentima praktične,
          kreativne pravne savete koji su usredsređeni na njihove strateške i
          komercijalne ciljeve. Naše iskustvo uključuje čitav spektar mehanizama
          za rešavanje sporova i parnice, od pregovora, posredovanja, mirenja i
          rešavanja sukoba.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
