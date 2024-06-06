import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ItLawSr() {
  return (
    <PageLayout>
      <PageHeader>IT Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naš IT tim pruža pravne usluge prilagođenu korisnicima, u vezi sa
          internetom i tehnologijom, kao što su e – commerce, zaštita
          privatnosti podataka na internetu, povreda autorskih prava na
          internetu i sl.
          <br />
          <br />
          Naša kancelarija se bavi pružanjem pravnih usluga i saveta iz oblasti
          BLOCHKCHAIN tehnologije i kriptovaluta, kao što su pružanje pravnih
          saveta u vezi sa ICO (initial coin offering) izrada pravnih mišljenja
          o usklađenosti kriptovaluta i ICO sa propisima Republike Srbije,
          pružanje pravnih saveta o ulasku na srpsko tržište prilikom poslovanja
          i otvaranja menjačnica za kriptovalute.
          <br />
          <br />
          Takođe, naš IT tim pruža pravne usluge savetovanja i konsultacija za
          tehnološke i hi – tech kompanije, kao i za START-UP projekte, kroz sve
          faze poslovanja.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
