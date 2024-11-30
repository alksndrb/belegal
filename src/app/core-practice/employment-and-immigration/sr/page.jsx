import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EmploymentAndImmigrationSr() {
  return (
    <PageLayout>
      <PageHeader>Radno i Imigraciono Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne pravne usluge u oblasti
          radnog prava, pomažući kako poslodavcima, tako i zaposlenima da se
          snalaze u složenim propisima u vezi sa radom. Pružamo stručne savete i
          podršku kako bi se osigurala potpuna usklađenost sa zakonima o
          zapošljavanju, s fokusom na zaštitu prava radnika i optimizaciju
          odnosa poslodavac-zaposleni.
          <br />
          <br />
          Pomažemo kompanijama u vezi sa širokim spektrom pitanja radnog prava,
          uključujući:
          <ul class="list-disc pl-6">
            <li>
              Izrada i revizija ugovora o radu kako bi se osigurala usklađenost
              sa zakonskim standardima i zaštita interesa i poslodavca i
              zaposlenog.
            </li>
            <li>
              Savetovanje o pravima i obavezama zaposlenih, kao što su radno
              vreme, naknade, beneficije, otkaz i rešavanje sporova.
            </li>
            <li>
              Savetovanje u vezi sa politikama i procedurama na radnom mestu,
              osiguravajući da kompanije ispune obaveze u oblastima kao što su
              bezbednost na radu, zabrana diskriminacije itd.
            </li>
            <li>
              Procedure otpuštanja zaposlenih, osiguravajući usklađenost sa
              lokalnim zakonodavstvom o radu i zaštitu preduzeća od mogućih
              pravnih sporova. disputes.
            </li>
            <li>
              Pitanja kolektivnog radnog prava, uključujući pregovore sa
              sindikatima, i savetovanje u vezi sa kolektivnim ugovorima.
            </li>
          </ul>
          <br />
          Pored radnog prava, naša kancelarija pruža specijalizovanu pravnu
          pomoć u oblasti imigracionog prava, pomažući kompanijama i stranim
          radnicima da se snađu u složenim pitanjima radnih dozvola, dozvola za
          boravak i viza. Ove usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Pomoć u dobijanju radnih viza i dozvola za boravak za strane
              radnike, osiguravajući usklađenost sa Zakonom o strancima i drugim
              relevantnim imigracionim propisima.
            </li>
            <li>
              Savetovanje o zakonitom zapošljavanju stranih državljana,
              uključujući obezbeđivanje potrebnih dozvola i osiguravanje da su
              svi zahtevi ispunjeni kako bi strani zaposleni zakonito radili u
              Srbiji.
            </li>
            <li>
              Pomoć preduzećima u prikupljanju potrebne dokumentacije za
              poslodavca i stranog zaposlenog, osiguravajući nesmetan proces
              dobijanja dozvola.
            </li>
          </ul>
          <br />
          Naš tim pruža sveobuhvatan pristup i radnom pravu i imigracionom
          pravu, osiguravajući da kompanije i zaposleni—domaći i strani—budu u
          potpunosti usklađeni sa propisima Republike Srbije. Sa našom stručnom
          podrškom, klijenti se mogu fokusirati na rast i poslovanje, bez brige
          o pravnim komplikacijama.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
