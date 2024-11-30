import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ForeignInvestments() {
  return (
    <PageLayout>
      <PageHeader>Strane Investicije</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatnu pravnu podršku stranim
          investitorima koji se snalaze u regulatornom okruženju u Srbiji.
          Pružamo stručne savete o relevantnim zakonima i propisima koji se
          odnose na strane investicije, pomažući investitorima da uspostave
          čvrst pravni temelj za svoje poslovanje.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Izbor odgovarajuće pravne forme za vašu kompaniju, bilo da je to
              akcionarsko društvo, društvo sa ograničenom odgovornošću (DOO) ili
              neki drugi oblik koji najbolje odgovara potrebama vašeg
              poslovanja.
            </li>
            <li>
              Pravni saveti o poreskim i fiskalnim obavezama, osiguravajući
              usklađenost sa zakonima i propisima Republike Srbije u vezi sa
              porezima.
            </li>
            <li>
              Pomoć u dobijanju potrebnih dozvola i licenci koje su neophodne za
              uspešnu implementaciju stranih investicija.
            </li>
          </ul>
          <br />
          Fokusirani smo na obezbeđivanje potpune pravne usklađenosti,
          omogućavajući investitorima da se fokusiraju na rast i razvoj svojih
          poslovnih aktivnosti, bez brige o regulatornim pitanjima.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
