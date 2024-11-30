import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
  CorePracticeHeader2,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DebtCollectionAndEnforcementSr() {
  return (
    <PageLayout>
      <PageHeader>Naplata Potraživanja i Izvršenje</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne pravne usluge za
          rešavanje izazova naplate dugova, koristeći kako vansudske nagodbe,
          tako i formalne postupke izvršenja. Posvećeni smo zaštiti interesa
          naših klijenata i obezbeđivanju brzog i efikasnog rešavanja problema
          vezanih za dugove.
          <CorePracticeHeader2>
            Vansudska naplata potraživanja
          </CorePracticeHeader2>
          Naš prioritet je rešavanje sporova u vezi sa dugovima prijateljskim
          putem kad god je to moguće, koristeći pregovore i medijaciju za
          vraćanje dugova bez potrebe za dugotrajnim sudskim postupcima. Naš
          pristup je usmeren na uštedu vremena i resursa klijentima, uz očuvanje
          profesionalnih odnosa sa dužnicima.
          <CorePracticeHeader2>Sudski postupci izvršenja</CorePracticeHeader2>Za
          slučajeve koji zahtevaju formalnu pravnu akciju, pružamo snažnu
          podršku za domaće i međunarodne klijente u postupcima izvršenja pred
          svim sudovima u Srbiji. Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Podnošenje predloga za postupke izvršenja u ime klijenata,
              obezbeđujući usklađenost sa svim pravnim zahtevima.
            </li>
            <li>
              Praćenje i upravljanje procesom izvršenja, bliska saradnja sa
              sudovima i javnim izvršiteljima kako bi se postigao najpovoljniji
              ishod.
            </li>
            <li>
              Zastupanje klijenata u svim fazama postupka izvršenja, rešavanje
              sporova i obezbeđivanje izvršenja presuda ili drugih izvršnih
              akata.
            </li>
          </ul>
          <CorePracticeHeader2>
            Prilagođena rešenja za međunarodne klijente
          </CorePracticeHeader2>
          Za međunarodne klijente koji se suočavaju sa prekograničnom naplatom
          dugova, pružamo specijalizovanu podršku, obezbeđujući usklađenost sa
          zakonodavstvom Srbije.
          <br />
          <br />
          Sa našim stručnostima, klijenti mogu biti sigurni da će njihovi
          slučajevi naplate dugova biti rešavani efikasno, profesionalno i u
          potpunosti u skladu sa zakonom. Naš cilj je da obezbedimo pravovremena
          i efektivna rešenja koja štite finansijske interese naših klijenata.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
