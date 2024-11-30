import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function SportsLawSr() {
  return (
    <PageLayout>
      <PageHeader>Sportsko Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža specijalizovane pravne usluge za
          sportsku industriju, pomažući u osnivanju i radu sportskih udruženja i
          klubova, kao i pružanju stalne pravne podrške sportistima. Imamo
          bogato iskustvo u rešavanju svih aspekata sportskog prava,
          osiguravajući da i organizacije i pojedinci budu u skladu sa
          relevantnim propisima i štite svoja prava.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Osnivanje sportskih udruženja i klubova, pružanje saveta o pravnim
              strukturama, registraciji i upravljanju.
            </li>
            <li>
              Pravna zastupljenost za postojeća sportska udruženja i klubove,
              osiguravanje usklađenosti sa nacionalnim i međunarodnim propisima.
            </li>
          </ul>
          <br />
          Takođe, pružamo sveobuhvatnu pravnu podršku sportistima, posebno u
          pitanjima kao što su:
          <ul class="list-disc pl-6">
            <li>
              Pregovaranje i sastavljanje ugovora, osiguravanje poštenih uslova
              i pravne zaštite za sportiste.
            </li>
            <li>
              Pravna savetovanja o ugovorima o reklamama, sponzorstvima i drugim
              komercijalnim dogovorima.
            </li>
          </ul>
          <br />
          Pored toga, specijalizovani smo za rešavanje sporova van suda,
          pomažući sportistima i klubovima da reše konflikte kroz medijaciju ili
          druge alternativne metode. Međutim, ukoliko ovi pokušaji ne uspeju,
          potpuno smo opremljeni za pružanje snažnog zastupanja pred sudom ili
          arbitražom kako bismo osigurali zaštitu interesa naših klijenata.
          <br />
          <br />
          Posebno naglašavamo naše iskustvo u pomoći sportistima u naplati
          nepodmirenih potraživanja od sportskih klubova, uključujući
          neisplaćene plate, bonuse ili druge ugovorne obaveze. Naša kancelarija
          marljivo radi na tome da sportisti dobiju naknadu koja im pripada,
          koristeći kako pregovore, tako i pravne postupke kada je to potrebno.
          <br />
          <br />
          Sa našim dubokim znanjem sportskog prava, posvećeni smo tome da naši
          klijenti—bilo da su sportisti, klubovi ili udruženja—mogu da se
          fokusiraju na svoj nastup, dok mi preuzimamo rešavanje pravnih
          komplikacija.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
