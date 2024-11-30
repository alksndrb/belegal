import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function MediaAndTelecommuncationsLawSr() {
  return (
    <PageLayout>
      <PageHeader>Medijsko Pravo i Telekomunikacije</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Advokatska kancelarija pruža specijalizovane pravne usluge u sektoru
          medija i telekomunikacija, obuhvatajući sve aspekte zakonske
          regulative, zaštite intelektualne svojine, usklađenosti s propisima i
          rešavanja sporova.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Regulativa i usklađenost: Pribavljanje licenci, savetovanje o
              primeni zakona i zastupanje pred regulatornim telima. .
            </li>
            <li>
              Intelektualna svojina: Ugovori o autorskim pravima, licencama i
              rešavanje sporova.
            </li>
            <li>
              Digitalne platforme: Saveti za internet poslovanje, zaštitu
              podataka i usklađenost sa GDPR-om.
            </li>
            <li>
              {" "}
              Oglašavanje: Pravni okvir za marketing kampanje i zaštita
              potrošača.
            </li>
            <li>
              {" "}
              Rešavanje sporova: Zastupanje pred sudovima i arbitražnim telima.
            </li>
          </ul>
          <br />
          Naš tim kombinuje pravno znanje i iskustvo u industriji, pružajući
          klijentima podršku u svim fazama poslovanja. Kontaktirajte nas za
          pouzdano pravno savetovanje!
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
