import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CollectionProcedureSr() {
  return (
    <PageLayout>
      <PageHeader>Naplata Potraživanja i Izvršenje</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija klijentima pruža usluge rešavanja problema
          naplate potraživanja vansudskim i sudskim putem. U cilju zaštite
          interesa naših klijenata efikasno zastupamo naše domaće i strane
          klijente u izvršnim postupcima pred svim sudovima u Srbiji.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
