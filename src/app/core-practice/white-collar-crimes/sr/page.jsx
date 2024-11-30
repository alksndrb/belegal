import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function WhiteCollarCrimesSr() {
  return (
    <PageLayout>
      <PageHeader>Privredni Kriminal</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša pravna kancelarija specijalizovana je za pružanje pravne pomoći u
          vezi sa kriminalnim delatnostima iz sfere privrednog kriminala,
          koristeći naše duboko razumevanje finansijskih propisa, pravila
          tržišta kapitala, korporativnog prava i poreskog prava. Ovaj
          jedinstveni spoj znanja omogućava nam da pružimo sveobuhvatnu podršku
          klijentima koji se suočavaju sa istragama i pravnim postupcima koji se
          odnose na krivična dela protiv privrede.
          <br />
          <br />
          Usluge koje nudimo su:
          <ul class="list-disc pl-6">
            <li>
              Pružanje podrške u fazama pre istrage, uključujući odgovaranje na
              upite regulatornih tela i organa za sprovođenje zakona.
            </li>
            <li>
              Interna istraživanja, pomoć klijentima u otkrivanju i rešavanju
              potencijalnih problema sa usklađenošću unutar organizacije.
            </li>
            <li>
              Odbrana u krivičnim postupcima, pružanje robusnih odbrambenih
              strategija za zaštitu interesa i reputacije klijenata.
            </li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
