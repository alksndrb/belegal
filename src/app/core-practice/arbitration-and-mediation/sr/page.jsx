import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
  CorePracticeHeader2,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ArbitrationAndMediationSr() {
  return (
    <PageLayout>
      <PageHeader>Arbitraža i Medijacija</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Pored sudskih postupaka, naša advokatska kancelarija specijalizovana
          je za alternativne metode rešavanja sporova (ADR), uključujući
          arbitražu i medijaciju, koje su često efikasnije, isplativije i
          poverljivije alternative sudskim postupcima.
          <CorePracticeHeader2>Arbitraža</CorePracticeHeader2>Zastupamo klijente
          u domaćim i međunarodnim arbitražnim postupcima. Naše usluge
          uključuju:
          <ul class="list-disc pl-6">
            <li>
              Sastavljanje arbitražnih klauzula kako bi se obezbedila izvršnost
              i usklađenost sa interesima klijenata.
            </li>
            <li>
              Zastupanje klijenata pred priznatim arbitražnim institucijama ili
              ad hoc tribunalima.
            </li>
            <li>
              Osiguranje izvršenja arbitražnih odluka u skladu sa lokalnim i
              međunarodnim pravnim okvirima.
            </li>
          </ul>
          <CorePracticeHeader2>Medijacija</CorePracticeHeader2>Medijacija nudi
          saradnički i nenametljiv pristup rešavanju sporova. Naš pravni tim
          pruža:
          <ul class="list-disc pl-6">
            <li>
              Uputstva i zastupanje tokom medijacijskih sesija, osiguravajući da
              interesi naših klijenata budu jasno komunicirani i efikasno
              pregovarani.
            </li>
            <li>
              Pomoć u sastavljanju nagodbenih ugovora koji su pravno validni i
              izvršni.
            </li>
            <li>
              Podršku u brzom rešavanju sporova, očuvanju odnosa i izbegavanju
              dugotrajnog konflikta.
            </li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
