import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CommercialLawSr() {
  return (
    <PageLayout>
      <PageHeader>Privredno Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <CorePracticeHeader2>Korporativno pravo</CorePracticeHeader2>
          Registracija poslovnih subjekata i održavanje njihove korporativne
          politike i akata. Takođe, dajemo pravne savete u vezi sa izborom
          pravne forme, uređenja međusobnih odnosa osnivača, te nudimo optimalna
          pravna rešenja u toku poslovanja i razvoja naših klijenata.
          <CorePracticeHeader2>
            Spajanje i preuzimanje (M&A)
          </CorePracticeHeader2>
          Svojim klijentima pružamo svu pravnu podršku koja im je potrebna za
          postizanje njihovih poslovnih ciljeva. Savetujemo kompanije svih
          veličina u širenju poslovanja u Srbiji. Nudimo usluge pravnog
          savetovanja i pravne pomoći u svim aktivnostima spajanja i
          preuzimanja.
          <CorePracticeHeader2>Bankarstvo i finansije</CorePracticeHeader2>
          Savetujemo banke, osiguravajuća društva , fondove privatnog kapitala,
          hedž fondove, investicione firme i druge finansijske institucije o
          svim vrstama finansijskih ugovora, od strukturiranja transakcija do
          prikupljanja kapitala, restrukturiranja duga, projektnog finansiranja
          i ugovora o zajmu i kreditu.
          <CorePracticeHeader2>Pravo konkurencije</CorePracticeHeader2>
          Budući da transakcije koje uključuju javni i vladin sektor obično
          uključuju neki oblik državne pomoći, mi savetujemo klijente u
          strukturiranju transakcija kako bi se smanjila izloženost rizicima
          vezanim za državnu pomoć i postigla uspešna saradnja sa javnim
          sektorom.
          <CorePracticeHeader2>Državna pomoć</CorePracticeHeader2>
          Budući da transakcije koje uključuju javni i vladin sektor obično
          uključuju neki oblik državne pomoći, mi savetujemo klijente u
          strukturiranju transakcija kako bi se smanjila izloženost rizicima
          vezanim za državnu pomoć i postigla uspešna saradnja sa javnim
          sektorom.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
