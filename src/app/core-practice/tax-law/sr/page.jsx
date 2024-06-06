import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function TaxLawSr() {
  return (
    <PageLayout>
      <PageHeader>Poresko Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naš poreski tim nudi pravne savete u svim oblastima poreskog prava,
          uključujući porez na dobit pravnih lica i porez na dohodak građana,
          kao i PDV, carine, državne podsticaje i porez na imovinu itd.
          <br /> <br />
          Pružanjem poreskih saveta, naš pravni tim može pomoći u optimizaciji
          poslovanja klijenta pomažući razumevanju poreskih obaveza i posledica,
          povećavajući efikasnost poslovanja.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
