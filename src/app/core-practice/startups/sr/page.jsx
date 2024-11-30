import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function StartupsSr() {
  return (
    <PageLayout>
      <PageHeader>Startapi</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatnu pravnu podršku
          klijentima u svim fazama njihovog start-up puta—od osnivanja do rasta
          i zaštite. Pružamo strateške savete o optimalnoj pravnoj strukturi za
          startape, uključujući da li da se osnuje kao preduzetnik, društvo sa
          ograničenom odgovornošću (DOO) ili neki drugi odgovarajući oblik.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Savetovanje o pravnoj usklađenosti, osiguravajući da vaš start-up
              bude usklađen sa svim relevantnim lokalnim i međunarodnim
              propisima.
            </li>
            <li>
              Pomoć u zaštiti intelektualne svojine, uključujući podnošenje
              prijava za patente i zaštitu vaših inovacija.
            </li>
            <li>
              Savetovanje o prikupljanju sredstava, raspodeli kapitala i drugim
              poslovno kritičnim pitanjima.
            </li>
          </ul>
          <br />
          Posvećeni smo pomaganju start-apovima da savladaju složen pravni
          okvir, zaštite svoju intelektualnu svojinu i obezbede dugoročni
          poslovni uspeh.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
