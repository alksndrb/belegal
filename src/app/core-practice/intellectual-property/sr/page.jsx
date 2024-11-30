import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function IntellectualPropertySr() {
  return (
    <PageLayout>
      <PageHeader>Intelektualna Svojina</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža stručnu pomoć u registraciji i
          zaštiti prava intelektualne svojine, uključujući patente, žigove,
          industrijske dizajne i autorska prava. Zastupamo klijente u sporovima
          vezanim za intelektualnu svojinu, pružamo prilagođene pravne savete i
          sprovodimo temeljne pravne istrage kako bismo zaštitili njihova prava.
          <br />
          <br />
          Naše specijalizovane usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Prethodna ispitivanja uslova za registraciju žigova, industrijskih
              dizajna, patenata i geografskih oznaka.
            </li>
            <li>
              Podnošenje i registracija kod Zavoda za intelektualnu svojinu.
            </li>
            <li>
              Zaštita autorskih prava, obezbeđujući da vaša kreativna dela budu
              pravno zaštićena.
            </li>
            <li>
              Registracija patenata i zaštitnih znakova, osiguravajući
              ekskluzivna prava za vaše izume i brendove.
            </li>
            <li>
              Zastupanje u sporovima o intelektualnoj svojini pred relevantnim
              organima i sudovima.
            </li>
            <li>
              Označavanje porekla proizvoda, osiguravajući usklađenost sa
              standardima geografskih oznaka.
            </li>
            <li>
              Zaštita podataka, privatnosti i poverljivosti, pomažući
              preduzećima da zaštite osetljive informacije.
            </li>
            <li>
              {" "}
              Izrada ugovora specijalizovanih za pitanja intelektualne svojine,
              uključujući licenciranje, i ugovore o poverljivosti.
            </li>
          </ul>
          <br />
          Sa strateškim i pažljivim pristupom, obezbeđujemo da intelektualna
          svojina naših klijenata bude efikasno zaštićena i upravljana, kako na
          lokalnom, tako i na međunarodnom nivou.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
