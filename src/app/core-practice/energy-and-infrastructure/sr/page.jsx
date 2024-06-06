import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnergyAndInfrastructureSr() {
  return (
    <PageLayout>
      <PageHeader>Energetika i Infrastruktura</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Multidisciplinarni tim naše advokatske kancelarije pruža usluge
          pravnog savetovanja, pre svega, u oblastima proizvodnje, transporta i
          distribucije električne energije kao i gasa i nafte, ali i u drugim
          energetskim delatnostima.
          <br />
          <br />
          Posebnu pažnju skrežemo na razvoj sektora obnovljivih izvora energije
          u vezi sa kojim posedujemo specijalizovane znanje. S tim u vezi,
          pružamo celokupnu podršku u vezi sa realizacijom projekata, počev od
          pravnih analiza do pribavljanja svih dozvola i licenci i praćenje
          celokupnog postupka izgradnje uz ispunjavanja svih uslova iz aspekta
          zaštite životne sredine.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
