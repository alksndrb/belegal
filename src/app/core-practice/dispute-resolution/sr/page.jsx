import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
  CorePracticeHeader2,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DisputeResolutionSr() {
  return (
    <PageLayout>
      <PageHeader>Rešavanje Sporova i Parnica</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija posvećena je pomaganju klijentima u
          prevenciji i rešavanju sporova, nudeći praktična i inovativna pravna
          rešenja koja su prilagođena njihovim strateškim i poslovnim ciljevima.
          Pružamo sveobuhvatnu pravnu podršku u svim fazama rešavanja sporova,
          osiguravajući da su interesi naših klijenata zaštićeni i prioritetni
          na svakom koraku.
          <CorePracticeHeader2>
            Preventivne pravne strategije
          </CorePracticeHeader2>
          Pomažemo klijentima u identifikovanju i smanjenju potencijalnih rizika
          koji mogu dovesti do sporova, pružajući proaktivne pravne savete kako
          bismo zaštitili njihove operacije i odnose. Fokusirajući se na
          prevenciju, pomažemo da se minimiziraju smetnje u poslovanju naših
          klijenata.
          <CorePracticeHeader2>
            Usluge u okviru sudskih postupaka
          </CorePracticeHeader2>
          Kada sporovi eskaliraju, pružamo snažnu zastupljenost u postupcima
          pred svim sudovima i administrativnim organima u Srbiji. Naš tim ima
          iskustva u rešavanju:
          <ul class="list-disc pl-6">
            <li>Građanskih i komercijalnih sporova</li>
            <li>Potraživanja i kršenja ugovora</li>
            <li>Sporova iz radnih odnosa</li>
            <li>Sporova u vezi sa intelektualnom svojinom</li>
            <li>Postupaka naplate dugova i izvršenja</li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
