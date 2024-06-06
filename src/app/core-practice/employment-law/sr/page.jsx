import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EmploymentLawSr() {
  return (
    <PageLayout>
      <PageHeader>Radno Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne usluge iz oblasti
          radnog prava. Po modelu rada ,,All in one place” pronalazimo
          jedinstvena i optimalna rešenja iz aspekta radnopravnih pitanja u
          skladu sa potrebama naših klijenata sa fokusom na uređenje celokupnog
          sistema u svakodnevnom radu, i to kada je reč o sastavljanju internih
          akata, zaštiti na radu, ekonomsko-socijalnim programima rešavanja
          viška zaposlenih, kao i uređenju ugovornih odnosa. <br /> <br />
          Imajući u vidu moderno doba i učestalo kretanje ljudi na tržištu rada,
          našim klijentima pružamo usluge zastupanja pred nadležnim organima
          Republike Srbije u postupku dobijanja boravka i radne dozvole.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
