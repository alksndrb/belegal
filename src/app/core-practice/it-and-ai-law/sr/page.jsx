import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ItAndAILawSr() {
  return (
    <PageLayout>
      <PageHeader>IT i Veštačka Inteligencija (AI)</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatnu pravnu podršku
          korisnicima interneta i preduzećima koja se bave online aktivnostima.
          Pružamo stručne savete u oblastima kao što su e-trgovina, zaštita
          podataka i privatnosti, autorska prava na internetu i druga pravna
          pitanja vezana za tehnologiju.
          <br />
          <br />
          Takođe, specijalizovani smo za Blockchain tehnologiju i kriptovalute,
          nudeći sledeće usluge:
          <ul class="list-disc pl-6">
            <li>Pravni saveti o inicijalnim ponudama kriptovaluta (ICO).</li>
            <li>
              Pravna mišljenja o usklađenosti kriptovaluta i ICO-a sa propisima
              Republike Srbije.
            </li>
            <li>
              Savetovanje o ulasku kripto-preduzeća na srpsko tržište,
              uključujući otvaranje menjačnica za kriptovalute.
            </li>
          </ul>
          <br />
          Pored toga, naš tim za veštačku inteligenciju (AI) pruža pravnu pomoć
          kako bi klijentima olakšao snalaženje u složenim pravnim, etičkim i
          regulatornim izazovima u vezi sa razvojem i implementacijom AI
          tehnologija. Pružamo strateške savete kako bi se osigurala usklađenost
          sa postojećim zakonima i propisima, istovremeno podstičući inovacije u
          ovoj brzo razvijajućoj oblasti.
          <br />
          <br />
          Naš multidisciplinarni tim je spreman da se bavi svim pravnim
          aspektima vezanim za IT pravo, digitalne tehnologije i veštačku
          inteligenciju, osiguravajući da naši klijenti ostanu usklađeni,
          konkurentni i zaštićeni u sve više digitalizovanom svetu.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
