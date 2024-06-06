import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnvironmentalLawSr() {
  return (
    <PageLayout>
      <PageHeader>Zaštita Životne Sredine</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Zaštita životne sredine predstavlja pravo nove generacije, te
          zaslužuje posebnu pažnju pravne posvećenosti. S tim u vezi, naš pravni
          tim poseduje posebno znanje u vezi sa pravnim savetovanjem klijenata u
          skladu sa važećim propisima Republike Srbije. Takođe, pružamo pomoć u
          dobijanju potrebnih dozvola i licenci iz aspekta zaštite životne
          sredine.
          <br />
          <br />
          Posebnu pažnju posvećujemo pravilnom, odnosno, zakonitom upravljanju i
          realizaciji projekata iz aspekta zaštite životne sredine,
          pridržavajući se propisa iz oblasti voda, šuma, upravljanja otpadom,
          kao i održivim razvojem u životnoj sredini.
          <br />
          <br />
          Sa druge strane pružamo konsultantske usluge u vezi sa zagađenjem
          vazduha, prečišćavanja optadnih voda, emisije buke, kao i ostalim
          oblastima koje su u vezi sa zaštitom životne sredine.
          <br /> <br />
          Imajući sve navedeno u vidu, pružamo pravne usluge prilagođavanja
          zakonima iz oblasti zaštite životne sredine i to:
          <ul className="list-disc list-inside">
            <li>Zakon o planiranju i izgradnji;</li>
            <li>Zakon o zaštiti prirode;</li>
            <li>Zakon o strateškoj proceni uticaja na životnu sredinu;</li>
            <li>Zakon o proceni uticaja na životnu sredinu;</li>
            <li>Zakon o zaštiti životne sredine;</li>
            <li>Zakon o nacionalnim parkovima;</li>
            <li>Zakon o vodama;</li>
            <li>Zakon o upravljanju otpadom;</li>
            <li>Zakon o šumama, kao i;</li>
            <li>
              drugi posebni zakoni koji uređuju i štite druge zaštitne objekte
              sa aspekta životne sredine.
            </li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
