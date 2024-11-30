import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function TaxLawSr() {
  return (
    <PageLayout>
      <PageHeader>Poresko Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne poreske savete, nudeći
          stručnu pomoć u svim oblastima oporezivanja kako bi zadovoljili
          potrebe korporativnih klijenata, pojedinaca i investitora. Naš cilj je
          da pomognemo klijentima da se snađu u složenim poreskim propisima,
          optimizuju svoje poreske obaveze i poboljšaju ukupnu poslovnu
          efikasnost.
          <br /> <br />
          Naša stručnost obuhvata:
          <ul class="list-disc pl-6">
            <li>
              Poreski saveti za privredne subjekte: Savetovanje firmi u vezi sa
              poreskim planiranjem, usklađivanjem sa zakonodavstvom o porezu na
              dobit i optimizacijom poreske pozicije.
            </li>
            <li>
              Poreski saveti za pojedince: Prilagođeni poreski saveti za
              pojedince, uključujući iseljenjike, osobe sa visokim primanjima i
              samostalne preduzetnike.
            </li>
            <li>
              Poreski saveti za PDV: Pomoć u vezi sa usklađivanjem, planiranjem
              i rešavanjem pitanja koja se odnose na međunarodne transakcije i
              lance snabdevanja.
            </li>
            <li>
              Carinske takse: Savetovanje u vezi sa uvozno-izvoznim procedurama,
              izuzecima od carinskih taksi i usklađivanjem sa carinskim
              zakonodavstvom.
            </li>
            <li>
              Vladine podsticaje: Pomoć firmama u korišćenju poreskih podsticaja
              i olakšica koje nudi država, uključujući one u vezi sa
              investicijama, zapošljavanjem i istraživanjem i razvojem.
            </li>
            <li>
              Poreske obaveze vezane za imovinu: Savetovanje u vezi sa porezima
              na nekretnine, uključujući poreze na prenose, vlasništvo i
              iznajmljivanje.
            </li>
          </ul>
          <CorePracticeHeader2>
            Optimizacija Poslovanja kroz poreske savete
          </CorePracticeHeader2>
          Pružajući strateške poreske savete, naš pravni tim pomaže klijentima
          da:
          <ul class="list-disc pl-6">
            <li>
              Razumeju svoje poreske obaveze i posledice kako bi obezbedili
              usklađenost i izbegli nepotrebne kazne ili revizije.
            </li>
            <li>
              Struktuiraju poslovne operacije i transakcije na poreski efikasan
              način.
            </li>
            <li>
              Povećaju ukupnu efikasnost poslovanja identifikovanjem mogućnosti
              za poreske uštede i implementacijom efektivnih poreskih
              strategija.
            </li>
          </ul>
          <CorePracticeHeader2>
            Međunarodno poresko savetovanje
          </CorePracticeHeader2>
          Za međunarodne klijente i preduzetnike koji posluju u više zemalja,
          pružamo specijalizovane savete u vezi sa ugovorima o izbegavanju
          dvostrukog oporezivanja, transfernim cenama i poreskim posledicama
          međunarodnih transakcija, osiguravajući usklađenost sa srpskim i
          međunarodnim poreskim zakonima.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
