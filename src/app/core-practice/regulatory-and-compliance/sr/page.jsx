import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RegulatoryAndComplianceSr() {
  return (
    <PageLayout>
      <PageHeader>Regulativa i Uskađenost sa Propisima</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pomaže kompanijama da se snađu u složenim
          pravnim okvirima, obezbeđujući potpunu usklađenost sa relevantnim
          zakonima i propisima kako bi se izbegle potencijalne novčane kazne i
          druge sankcije. Pružamo stratešku pravnu pomoć u kreiranju i
          implementaciji internih politika i procedura koje osiguravaju
          kontinuiranu usklađenost sa primenljivim zakonskim zahtevima.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Razvoj i održavanje internih pravila i procedura kako bi se
              osigurala usklađenost sa zakonskim i regulatornim standardima.
            </li>
            <li>
              Pomoć u vođenju evidencije i dokumentacije, osiguravajući da
              kompanije mogu dokazati usklađenost kada to zahteva nadležno telo.
            </li>
            <li>
              Revizija postojećih politika i pravnih okvira kako bi se osigurala
              usklađenost sa aktuelnim zakonima i propisima.
            </li>
          </ul>
          <br />
          Takođe, pružamo stručne savete u vezi sa specifičnim industrijskim
          propisima, uključujući:
          <ul class="list-disc pl-6">
            <li>Zakonodavstvo o zaštiti podataka i privatnosti.</li>
            <li>Usklađenost sa radnim zakonodavstvom i prava zaposlenih.</li>
            <li>Propisi o zaštiti životne sredine.</li>
            <li>
              druge specijalizovane pravne oblasti, u zavisnosti od potreba
              klijenta.
            </li>
          </ul>
          <br />
          Uz našu sveobuhvatnu podršku, kompanije mogu sa sigurnošću održavati
          regulatornu usklađenost i fokusirati se na svoje osnovne poslovne
          aktivnosti.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
