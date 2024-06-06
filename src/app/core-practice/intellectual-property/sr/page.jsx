import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function IntellectualPropertySr() {
  return (
    <PageLayout>
      <PageHeader>Pravo Intelektualne Svojine</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Pomažemo klijentima u registraciji njihovih patenata i zaštićenih
          žigova, dizajna i kršenja autorskih prava, kroz zastupanje i pripremu
          pravnih mišljenja i pravnih istraga. Naša advokatska kancelarija pruža
          usluge ispitivanja uslova za registraciju žigova, industrijskog
          dizajna, patenata i geografskih oznaka porekla. Takođe, naša
          advokatska kancelarija, sprovodi celokupni postupak registracije pred
          Zavodom za intelektualnu svojinu, sa osvrtom na širi spektar usluga u
          vezi sa s prometom prava intelektualne svojine (prenos, licence,
          zaloga, franšizing) kao i iniciranje i vođenje postupaka pred
          sudovima, nadležnim inspekcijskim i carinskim organima u cilju
          sveobuhvatne zaštite prava intelektualne svojine.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
