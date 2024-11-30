import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DataProtectionAndGDPRSr() {
  return (
    <PageLayout>
      <PageHeader>Zaštita Podataka i GDPR</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatan niz pravnih usluga kako
          bi pomogla pravnim licima i drugim organizacijama da postignu
          usklađenost sa zakonodavstvom o zaštiti podataka, uključujući Zakon o
          zaštiti podataka o ličnosti (GDPR) i druge lokalne i međunarodne
          zakone o zaštiti podataka.
          <br />
          <br />
          Pružamo stručnu pravnu pomoć u sledećim oblastima:
          <ul class="list-disc pl-6">
            <li>
              Procene usklađenosti: Sprovodimo detaljne procene kako bismo
              evaluirali trenutnu usklađenost organizacije sa zakonima o zaštiti
              podataka i identifikovali potencijalne propuste ili oblasti za
              poboljšanje.
            </li>
            <li>
              Izrada politika: Pomažemo u kreiranju prilagođenih politika
              zaštite podataka, ugovora o obradi podataka i drugih potrebnih
              pravnih dokumenata kako bi se osigurala usklađenost.
            </li>
          </ul>
          <br />
          Pored lokalnih propisa, pružamo pravnu podršku kako bismo obezbedili
          usklađenost sa međunarodnim zakonima o zaštiti podataka, savetujući o
          prekograničnim transferima podataka, međunarodnim okvirima zaštite
          podataka i pravnim implikacijama poslovanja u jurisdikcijama sa
          strožim zakonima o zaštiti podataka.
          <br />
          <br />
          Naš cilj je da pomognemo klijentima da zaštite lične podatke, smanje
          rizike i izbegnu potencijalne novčane kazne ili štetu po reputaciju,
          dok osiguravamo da njihove prakse zaštite podataka budu u skladu sa
          lokalnim i globalnim standardima. Blisko sarađujemo sa preduzećima
          kako bismo stvorili održive i efikasne strategije zaštite podataka,
          osiguravajući dugoročnu usklađenost i snažnu kulturu zaštite podataka
          unutar organizacije.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
